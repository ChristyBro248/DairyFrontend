import { useAccount, useReadContract, useChainId } from 'wagmi'
import { formatUnits } from 'viem'
import { getTokenAddress } from '../config/tokens'

// ERC20 ABI for balanceOf and decimals functions
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
  }
]

export function TestCoinBalance() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  
  // Get TestCoin contract address for current chain
  const testCoinAddress = getTokenAddress(chainId, 'TESTCOIN')

  // Get token balance
  const { data: balance, isError: balanceError, isLoading: balanceLoading } = useReadContract({
    address: testCoinAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    query: {
      enabled: !!address && isConnected && !!testCoinAddress,
    }
  })

  // Get token decimals
  const { data: decimals } = useReadContract({
    address: testCoinAddress,
    abi: ERC20_ABI,
    functionName: 'decimals',
    query: {
      enabled: !!testCoinAddress,
    }
  })

  // Get token symbol
  const { data: symbol } = useReadContract({
    address: testCoinAddress,
    abi: ERC20_ABI,
    functionName: 'symbol',
    query: {
      enabled: !!testCoinAddress,
    }
  })

  if (!isConnected) {
    return null
  }

  if (!testCoinAddress) {
    return (
      <div className="token-balance error">
        <span>TestCoin not available on this network</span>
      </div>
    )
  }

  if (balanceLoading) {
    return (
      <div className="token-balance">
        <span>Loading TestCoin balance...</span>
      </div>
    )
  }

  if (balanceError) {
    return (
      <div className="token-balance error">
        <span>Error loading TestCoin balance</span>
      </div>
    )
  }

  const formattedBalance = balance && decimals 
    ? formatUnits(balance, decimals)
    : '0'

  return (
    <div className="token-balance">
      <div className="balance-info">
        <span className="balance-label">TestCoin Balance:</span>
        <span className="balance-amount">
          {parseFloat(formattedBalance).toLocaleString()} {symbol || 'TESTCOIN'}
        </span>
      </div>
    </div>
  )
}