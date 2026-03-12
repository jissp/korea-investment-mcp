import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { KoreaInvestmentBaseHeader } from '@modules/korea-investment/common';
import {
    KoreaInvestmentOauthClient,
    ResponseOauth2TokenP,
} from '@modules/korea-investment/korea-investment-oauth-client';
import type { KoreaInvestmentHelperConfig } from './korea-investment-helper.types';
import { KoreaInvestmentHelperProvider } from './korea-investment-helper.types';
import { Nullable } from '@base/common';

@Injectable()
export class KoreaInvestmentHelperService {
    private readonly logger = new Logger(KoreaInvestmentHelperService.name);
    private token: Nullable<ResponseOauth2TokenP> = null;

    constructor(
        private readonly oAuthClient: KoreaInvestmentOauthClient,
        @Inject(KoreaInvestmentHelperProvider.Config)
        private readonly config: KoreaInvestmentHelperConfig,
        @Inject(KoreaInvestmentHelperProvider.Client)
        private readonly client: AxiosInstance,
    ) {}

    /**
     * @param method
     * @param url
     * @param payload
     * @param params
     * @param headers
     */
    public async request<T, R>({
        method,
        url,
        data: payload,
        params,
        headers,
    }: Pick<
        AxiosRequestConfig<T>,
        'method' | 'url' | 'params' | 'data' | 'headers'
    >): Promise<R> {
        try {
            const response = await this.client.request<R>({
                method,
                url,
                params,
                data: payload,
                headers,
                timeout: 5000,
            });

            return response.data;
        } catch (error) {
            this.logger.error(error);

            throw error;
        }
    }

    /**
     * @param tradeId
     */
    public async buildHeaders(
        tradeId: string,
    ): Promise<Pick<KoreaInvestmentBaseHeader, 'authorization' | 'tr_id'>> {
        const token = await this.getToken();

        return {
            authorization: `Bearer ${token}`,
            tr_id: tradeId,
        };
    }

    public isToken(
        token: Nullable<ResponseOauth2TokenP>,
    ): token is ResponseOauth2TokenP {
        if (!this.token) {
            return false;
        }

        const expiredTimestamp = new Date(
            this.token.access_token_token_expired,
        ).getTime();
        if (Date.now() > expiredTimestamp) {
            return false;
        }

        return true;
    }

    /**
     * 한국투자증권 API 액세스 토큰을 발급합니다.
     */
    public async getToken() {
        if (!this.isToken(this.token)) {
            const token = await this.oAuthClient.getToken(
                this.config.credential,
            );
            if (!token) {
                throw new Error(
                    'Failed to get token from Korea Investment API',
                );
            }

            this.token = token;
        }

        return this.token.access_token;
    }
}
