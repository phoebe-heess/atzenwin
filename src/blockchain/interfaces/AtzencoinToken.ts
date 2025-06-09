export interface AtzencoinToken {
  // Token Information
  name: string;
  symbol: string;
  totalSupply: number;
  decimals: number;

  // Distribution
  communityRewards: number;  // 40%
  developmentEcosystem: number;  // 20%
  teamAdvisors: number;  // 15%
  marketingPartnerships: number;  // 15%
  liquidityPool: number;  // 10%

  // User Rewards
  initialRegistrationBonus: number;  // 100 ATZ
  dailyLoginBonus: number;  // 10 ATZ
  referralBonus: number;  // 50 ATZ
}

export interface TokenDistribution {
  address: string;
  amount: number;
  vestingPeriod?: number;  // in days, if applicable
  cliffPeriod?: number;    // in days, if applicable
}

export interface UserTokenBalance {
  address: string;
  balance: number;
  lastClaimTimestamp: number;
  referralCount: number;
} 