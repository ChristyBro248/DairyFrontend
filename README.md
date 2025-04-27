# Dairy Frontend

A modern Web3 frontend application built with React, Vite, and Web3Modal that enables users to connect their wallets and query token balances across multiple blockchain networks.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.2.0-purple)
![Wagmi](https://img.shields.io/badge/Wagmi-2.16.2-green)
![Web3Modal](https://img.shields.io/badge/Web3Modal-5.1.11-orange)

## Features

### 🔗 Wallet Connection
- **Multi-Wallet Support**: Connect with MetaMask, WalletConnect, and other popular wallets
- **Multi-Chain Support**: Ethereum Mainnet, Arbitrum, Polygon, and Sepolia testnet
- **Real-time Connection Status**: Display connected wallet address with ENS name resolution
- **Easy Disconnect**: One-click wallet disconnection

### 🪙 Token Balance Management
- **TestCoin Balance Display**: Automatically show your TestCoin balance when connected
- **Multi-Chain Token Support**: Query token balances across different networks
- **Real-time Updates**: Automatic balance updates when transactions occur

### 🔍 Custom Token Query
- **Contract Address Input**: Query any ERC20 token by entering its contract address
- **Address Validation**: Real-time validation of Ethereum addresses
- **Comprehensive Token Info**: Display token name, symbol, decimals, and your balance
- **Error Handling**: Graceful handling of invalid contracts and network errors
- **Loading States**: Visual feedback during token information retrieval

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Web3 Integration**: 
  - Wagmi 2.16.2 (React hooks for Ethereum)
  - Web3Modal 5.1.11 (Wallet connection modal)
  - Viem 2.33.3 (Ethereum library)
- **State Management**: TanStack React Query 5.84.2
- **Styling**: CSS3 with responsive design

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A Web3 wallet (MetaMask, etc.)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dairyfrontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up WalletConnect Project ID**
   
   Get your Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com) and replace `'YOUR_PROJECT_ID'` in:
   - `src/wagmi.js` line 6
   - `src/main.jsx` line 18

4. **Configure Token Contracts** (Optional)
   
   Update token contract addresses in `src/config/tokens.js` for your specific tokens.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── WalletConnect.jsx      # Wallet connection component
│   ├── TestCoinBalance.jsx    # TestCoin balance display
│   └── TokenBalanceQuery.jsx  # Custom token query component
├── config/
│   └── tokens.js              # Token contract configurations
├── wagmi.js                   # Wagmi configuration
├── App.jsx                    # Main application component
├── App.css                    # Application styles
└── main.jsx                   # Application entry point
```

## Configuration

### Supported Networks

The application supports the following networks by default:
- **Ethereum Mainnet** (Chain ID: 1)
- **Arbitrum** (Chain ID: 42161)
- **Polygon** (Chain ID: 137)
- **Sepolia Testnet** (Chain ID: 11155111)

### Adding Custom Tokens

To add support for custom tokens, update the `TOKENS` object in `src/config/tokens.js`:

```javascript
export const TOKENS = {
  1: { // Ethereum Mainnet
    YOUR_TOKEN: '0x...' // Your token contract address
  },
  // Add other networks as needed
}
```

## Usage

### Connecting a Wallet

1. Click the "Connect Wallet" button
2. Select your preferred wallet from the modal
3. Approve the connection in your wallet
4. Your wallet address and TestCoin balance will be displayed

### Querying Token Balances

1. Ensure your wallet is connected
2. In the "查询代币余额" (Query Token Balance) section:
   - Enter any ERC20 token contract address
   - Click "查询余额" (Query Balance)
   - View the token information and your balance

### Example Token Addresses

You can test with these popular token addresses:
- **USDC**: `0xA0b86a33E6441b435b1Bd6A7E7Aad7C1f4e3EC3b`
- **USDT**: `0xdAC17F958D2ee523a2206206994597C13D831ec7`
- **WETH**: `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Considerations

- Never commit private keys or seed phrases
- Always verify contract addresses before querying
- Test with small amounts on testnets first
- Keep your dependencies updated

## Troubleshooting

### Common Issues

1. **"Please connect wallet" message**
   - Ensure you have a Web3 wallet installed (MetaMask, etc.)
   - Make sure the wallet is unlocked and connected to the correct network

2. **Token query fails**
   - Verify the contract address is correct and is a valid ERC20 token
   - Ensure you're connected to the correct network where the token exists

3. **WalletConnect connection issues**
   - Verify your Project ID is correctly set in the configuration files
   - Check if WalletConnect is properly configured

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Wagmi](https://wagmi.sh/) for excellent React hooks for Ethereum
- [Web3Modal](https://web3modal.com/) for seamless wallet connections
- [Vite](https://vitejs.dev/) for fast development experience
- [React](https://react.dev/) for the component framework