// Token contract addresses for different networks
export const TOKENS = {
  // Ethereum Mainnet
  1: {
    TESTCOIN: '0x1234567890123456789012345678901234567890', // Replace with actual TestCoin address
  },
  // Arbitrum
  42161: {
    TESTCOIN: '0x1234567890123456789012345678901234567890', // Replace with actual TestCoin address
  },
  // Polygon
  137: {
    TESTCOIN: '0x1234567890123456789012345678901234567890', // Replace with actual TestCoin address
  },
  // Sepolia Testnet
  11155111: {
    TESTCOIN: '0x1234567890123456789012345678901234567890', // Replace with actual TestCoin address
  }
}

// Get token address for current chain
export const getTokenAddress = (chainId, tokenSymbol) => {
  return TOKENS[chainId]?.[tokenSymbol] || TOKENS[1]?.[tokenSymbol]
}