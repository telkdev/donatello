import type {
  Requisit,
  CreditCard,
  Cryptocurrency,
  IBAN,
  Monobanka,
} from "./types";

export function isCreditCard(requisit: Requisit): requisit is CreditCard {
  return (requisit as CreditCard).bankDisplayName !== undefined;
}

export function isIBAN(requisit: Requisit): requisit is IBAN {
  return (requisit as IBAN).bankDisplayName !== undefined;
}

export function isMonobanka(requisit: Requisit): requisit is Monobanka {
  return (requisit as Monobanka).link !== undefined;
}

export function isCryptocurrency(
  requisit: Requisit
): requisit is Cryptocurrency {
  return (requisit as Cryptocurrency).cryptocurrencyDisplayName !== undefined;
}
