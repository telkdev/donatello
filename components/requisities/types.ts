export type CreditCard = {
  bankDisplayName: string;
  creditCardNumber: string;
};

export type IBAN = {
  bankDisplayName: string;
  creditCardNumber: string;
};

export type Monobanka = {
  link: string;
};

export type Cryptocurrency = {
  cryptocurrencyDisplayName: string;
  walletAddress: string;
};

export type Requisit = CreditCard | IBAN | Monobanka | Cryptocurrency;
