import { defaultWagmiConfig } from '@web3modal/wagmi'
import { mainnet, arbitrum, polygon } from 'wagmi/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID'

// 2. Create wagmiConfig
const metadata = {
  name: 'Dairy Frontend',
  description: 'Dairy Frontend Web3 App',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon]
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
})