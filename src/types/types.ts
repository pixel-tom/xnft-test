import { Sale } from "@rainfi/sdk/dist/types/types";

export type LendingData = {
  transactionId: string;
  market: string;
  offerBlocktime: number | null;
  cancelBlocktime: number | null;
  acceptBlocktime: number | null;
  repayBlocktime: number;
  extendBlocktime: number | null;
  liquidateBlocktime: number | null;
  loadId: string;
  newLoanId: string;
  status: string;
  lender: string;
  borrower: string;
  collateralMint: string;
  loanDurationSeconds: number;
  principalAmount: number;
  repayAmount: number | null;
  helloMoonCollectionId: string;
  protocolCollectionId: string;
  amountToRepay: number;
  apy: number | null;
};

export type BorrowingData = {
  id: string | null | undefined;
  createdAt: number;
  mint: string;
  duration: number;
  interest: number;
  amount: any;
  transactionId: string;
  market: string;
  offerBlocktime: number | null;
  cancelBlocktime: number | null;
  acceptBlocktime: number | null;
  repayBlocktime: number | null;
  extendBlocktime: number | null;
  liquidateBlocktime: number | null;
  loadId: string;
  newLoanId: string;
  status: string;
  lender: string;
  borrower: string;
  collateralMint: string;
  loanDurationSeconds: number;
  principalAmount: number;
  repayAmount: number | null;
  helloMoonCollectionId: string;
  protocolCollectionId: string;
  amountToRepay: number;
  apy: number | null;
  accountAddress?: string | null;
};

export interface Loan {
  accountAddress: string;
  kind: 'loan' | 'mortgage';
  status: 'open' | 'ongoing' | 'repaid' | 'liquidated';
  borrower: string;
  lender: string;
  pool: string;
  mint: string;
  currency: string;
  isCustom: boolean;
  isFrozen: boolean;
  interest: number;
  amount: number;
  price: number;
  duration: number;
  collection: number;
  liquidation: number;
  marketplace: 'none' | 'solanart' | 'auctionhouse' | 'hyperspace' | 'hadeswap' | 'rain' | 'tensorswap_order' | 'tensorswap_listing';
  sale: Sale;
  createdAt: number;
  expiredAt: number;
  repaidAt: number;
  soldAt: number;
  image?: string;
  nft?: any;
  collectionName?: string;
  liquidatedAt: number;

}