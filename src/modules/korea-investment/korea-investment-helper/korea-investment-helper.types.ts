import { AppCredential } from '@modules/korea-investment/common';

export enum KoreaInvestmentHelperProvider {
    Config = 'Config',
    Client = 'Client',
}

export interface KoreaInvestmentHelperConfig {
    host: string;
    credential: AppCredential;
}
