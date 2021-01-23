export interface User {
    username: string;
    password: string;
    token: string;
    id: string;
    name: string;
}
export interface Wallet {
    id: number;
    changeId: number;
    name: string,
    reference: string,
    referencePrefix: string,
    referenceNo: number,
    referenceAlternate: string,
    contactId: number,
    contact: string,
    isInactive: boolean,
    accountTypeCode: string,
    providerCode: string,
    bankId: number,
    bic: string,
    business: number,
    trust: number,
    realTrust: number,
    realBusiness: number,
    realTradeLimit: number,
    tradeLimit: number,
    onceOffWithdrawalLimit: number,
    dailyWithdrawalLimit: number,
    currencyCode: string,
    iban: string,
    symbol: string,
    cashTrader: boolean,
    newTransactionCount: number,
    provider: string,
    isDefault: boolean
}

export interface Loading {
    message: string;
    show: boolean;
}
export interface UserState {
    accountWallets: Wallet[];
    user: User;
    loading: Loading;
}

export interface UserLoginData {
    id: number,
    userName: string,
    name: string,
    token: string,
    expires: string,
    role: string,
    language: string
}