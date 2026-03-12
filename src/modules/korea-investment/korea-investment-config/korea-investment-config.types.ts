import { IConfiguration } from '@base/configuration';

export enum KoreaInvestmentConfigProvider {
    AppConfig = 'APP_CONFIG',
}

export type KoreaInvestmentConfig = IConfiguration['koreaInvestment'];
