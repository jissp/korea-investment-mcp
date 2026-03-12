import type { AxiosInstance } from 'axios';
import { Inject, Injectable } from '@nestjs/common';
import { AppCredential } from '@modules/korea-investment/common';
import {
    KoreaInvestmentOauthClientProvider,
    RequestBodyOauth2TokenP,
    ResponseOauth2RevokeTokenP,
    ResponseOauth2TokenP,
} from './korea-investment-oauth-client.types';

@Injectable()
export class KoreaInvestmentOauthClient {
    constructor(
        @Inject(KoreaInvestmentOauthClientProvider.Client)
        private readonly client: AxiosInstance,
    ) {}

    /**
     * 접근토큰발급
     * @param credential
     */
    public async getToken<R = ResponseOauth2TokenP>(
        credential: AppCredential,
    ): Promise<R> {
        const response = await this.client.request<R>({
            method: 'POST',
            url: '/oauth2/tokenP',
            data: {
                ...credential,
                grant_type: 'client_credentials',
            } as RequestBodyOauth2TokenP,
        });

        return response.data;
    }

    /**
     * 접근토큰폐기
     * @param credential
     * @param token
     */
    public async revokeToken<R = ResponseOauth2RevokeTokenP>({
        credential,
        token,
    }: {
        credential: AppCredential;
        token: string;
    }): Promise<R> {
        const response = await this.client.request<R>({
            method: 'POST',
            url: '/oauth2/revokeP',
            data: {
                credential,
                token,
            },
        });

        return response.data;
    }
}
