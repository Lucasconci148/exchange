export interface IExchange {
    success: boolean;
    rates?: IExchangeRates;
    error?: IExchangeError;
}

export interface IExchangeError {
    code: String;
    type: string;
    info: String;
}

export interface IExchangeRates {
    USD: number;
}