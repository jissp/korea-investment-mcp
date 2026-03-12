import { Injectable } from '@nestjs/common';
import type { DomesticStockCreditBalanceRankParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from 'jissp-mcp-server-nestjs';
import { BaseExecutor, McpResource, McpTool } from 'jissp-mcp-server-nestjs';

export type CreditBalanceRankExecutorParams = Omit<
    DomesticStockCreditBalanceRankParam,
    'FID_COND_MRKT_DIV_CODE'
>;

@Injectable()
export class CreditBalanceRankExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'credit-balance-rank',
        description: '국내주식 신용잔고상위를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_COND_SCR_DIV_CODE: {
                    type: 'string',
                    description: '조건 화면 분류 코드 (Unique key: 11701)',
                },
                FID_INPUT_ISCD: {
                    type: 'string',
                    description:
                        '입력 종목코드 (0000: 전체, 0001: 거래소, 1001: 코스닥, 2001: 코스피200)',
                },
                FID_OPTION: {
                    type: 'string',
                    description: '증가율기간 (2~999)',
                },
                FID_RANK_SORT_CLS_CODE: {
                    type: 'string',
                    description: '순위 정렬 구분 코드 (융자: 0~4, 대주: 5~9)',
                },
            },
            required: [
                'FID_COND_SCR_DIV_CODE',
                'FID_INPUT_ISCD',
                'FID_OPTION',
                'FID_RANK_SORT_CLS_CODE',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///credit-balance-rank/{FID_INPUT_ISCD}/{FID_RANK_SORT_CLS_CODE}',
        name: 'credit-balance-rank',
        description: '국내주식 신용잔고상위를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<CreditBalanceRankExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getCreditBalanceRank({
            ...params,
            FID_COND_MRKT_DIV_CODE: 'J',
        });
    }
}
