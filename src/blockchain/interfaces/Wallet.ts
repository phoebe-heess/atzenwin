export interface PlumeWallet {
  address: string;
  privateKey: string;  // Encrypted in storage
  publicKey: string;
  balance: {
    native: number;
    atzencoins: number;
  };
  transactions: Transaction[];
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: number;
  timestamp: number;
  status: 'pending' | 'confirmed' | 'failed';
  type: 'transfer' | 'reward' | 'purchase';
}

export interface WalletCreationResult {
  wallet: PlumeWallet;
  mnemonic: string;  // For backup purposes
  backupInstructions: string;
} 