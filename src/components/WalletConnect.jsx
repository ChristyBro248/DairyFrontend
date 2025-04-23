import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import { TestCoinBalance } from './TestCoinBalance'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  if (isConnected) {
    return (
      <div className="wallet-info">
        <div className="connected">
          <span>Connected to {ensName || `${address?.slice(0, 6)}...${address?.slice(-4)}`}</span>
          <TestCoinBalance />
          <button onClick={() => disconnect()} className="disconnect-btn">
            Disconnect
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-connect">
      <w3m-button />
    </div>
  )
}