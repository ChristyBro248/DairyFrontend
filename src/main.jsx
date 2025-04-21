import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi'

import { config } from './wagmi'

// 1. Setup queryClient
const queryClient = new QueryClient()

// 2. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId: 'YOUR_PROJECT_ID',
  enableAnalytics: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)