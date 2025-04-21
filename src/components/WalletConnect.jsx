import { useAccount, useDisconnect, useEnsName } from 'wagmi'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  if (isConnected) {
    return (
      <div className="wallet-info">
        <div className="connected">
          <span>Connected to {ensName || address}</span>
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