import { useState } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { formatUnits, isAddress } from 'viem'

// ERC20 ABI for balanceOf, decimals, name and symbol functions
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    type: 'function',
  }
]

export function TokenBalanceQuery() {
  const { address, isConnected } = useAccount()
  const [tokenAddress, setTokenAddress] = useState('')
  const [isQuerying, setIsQuerying] = useState(false)
  
  const isValidAddress = tokenAddress && isAddress(tokenAddress)

  // Get token balance
  const { data: balance, isError: balanceError, isLoading: balanceLoading } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    query: {
      enabled: !!address && isConnected && isValidAddress && isQuerying,
    }
  })

  // Get token decimals
  const { data: decimals } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'decimals',
    query: {
      enabled: isValidAddress && isQuerying,
    }
  })

  // Get token symbol
  const { data: symbol } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'symbol',
    query: {
      enabled: isValidAddress && isQuerying,
    }
  })

  // Get token name
  const { data: name } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'name',
    query: {
      enabled: isValidAddress && isQuerying,
    }
  })

  const handleQuery = () => {
    if (isValidAddress) {
      setIsQuerying(true)
    }
  }

  const handleClear = () => {
    setTokenAddress('')
    setIsQuerying(false)
  }

  const formattedBalance = balance && decimals 
    ? formatUnits(balance, decimals)
    : '0'

  return (
    <div className="token-query">
      <h3>查询代币余额</h3>
      
      <div className="query-input-section">
        <div className="input-group">
          <input
            type="text"
            placeholder="输入代币合约地址 (0x...)"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            className={`token-input ${tokenAddress && !isValidAddress ? 'invalid' : ''}`}
          />
          <div className="button-group">
            <button 
              onClick={handleQuery}
              disabled={!isValidAddress || !isConnected}
              className="query-btn"
            >
              查询余额
            </button>
            <button 
              onClick={handleClear}
              className="clear-btn"
            >
              清除
            </button>
          </div>
        </div>
        
        {tokenAddress && !isValidAddress && (
          <div className="error-message">
            请输入有效的合约地址
          </div>
        )}
        
        {!isConnected && (
          <div className="warning-message">
            请先连接钱包
          </div>
        )}
      </div>

      {isQuerying && isValidAddress && (
        <div className="query-results">
          {balanceLoading ? (
            <div className="loading">
              正在查询代币信息...
            </div>
          ) : balanceError ? (
            <div className="error">
              查询失败，请检查合约地址是否正确
            </div>
          ) : (
            <div className="token-info">
              <div className="token-details">
                <div className="token-name">
                  <strong>{name || '未知代币'} ({symbol || 'UNKNOWN'})</strong>
                </div>
                <div className="token-address">
                  合约地址: {tokenAddress}
                </div>
              </div>
              
              <div className="balance-display">
                <div className="balance-label">您的余额:</div>
                <div className="balance-value">
                  {parseFloat(formattedBalance).toLocaleString()} {symbol || 'tokens'}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}