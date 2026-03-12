import { Injectable } from '@nestjs/common';
import type { DomesticStockShortSaleRankParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '../../mcp-server.types';
import { McpResource, McpTool } from '../../decorators';
import { BaseExecutor } from '../../base.executor';

export type ShortSaleRankExecutorParams = Pick<
    DomesticStockShortSaleRankParam,
    | 'FID_INPUT_ISCD'
    | 'FID_PERIOD_DIV_CODE'
    | 'FID_INPUT_CNT_1'
    | 'FID_APLY_RANG_PRC_1'
    | 'FID_APLY_RANG_PRC_2'
>;

@Injectable()
export class ShortSaleRankExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'short-sale-rank',
        description: '국내주식 공매도상위를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_INPUT_ISCD: {
                    type: 'string',
                    description:
                        '입력 종목코드 (0000: 전체, 0001: 코스피, 1001: 코스닥, 2001: 코스피200, 4001: KRX100, 3003: 코스닥150)',
                },
                FID_PERIOD_DIV_CODE: {
                    type: 'string',
                    description: '조회구분 (일/월) (D: 일, M: 월)',
                },
                FID_INPUT_CNT_1: {
                    type: 'string',
                    description: '조회기간(일수) (일: 0~4, 9, 14 / 월: 1~3)',
                },
                FID_APLY_RANG_PRC_1: {
                    type: 'string',
                    description: 'FID 적용 범위 가격1 (가격 ~)',
                },
                FID_APLY_RANG_PRC_2: {
                    type: 'string',
                    description: 'FID 적용 범위 가격2 (~ 가격)',
                },
            },
            required: [
                'FID_INPUT_ISCD',
                'FID_PERIOD_DIV_CODE',
                'FID_INPUT_CNT_1',
                'FID_APLY_RANG_PRC_1',
                'FID_APLY_RANG_PRC_2',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///short-sale-rank/{FID_INPUT_ISCD}',
        name: 'short-sale-rank',
        description: '국내주식 공매도상위를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<ShortSaleRankExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getShortSaleRank({
            ...params,
            FID_APLY_RANG_VOL: '',
            FID_COND_MRKT_DIV_CODE: 'J',
            FID_COND_SCR_DIV_CODE: '20482',
            FID_TRGT_EXLS_CLS_CODE: '',
            FID_TRGT_CLS_CODE: '',
        });
    }
}
