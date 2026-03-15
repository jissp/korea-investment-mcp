import { Injectable } from '@nestjs/common';
import type { DomesticStockVolumeRankParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcToolRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type VolumeRankExecutorParams = Omit<
    DomesticStockVolumeRankParam,
    'FID_COND_SCR_DIV_CODE' | 'FID_INPUT_DATE_1'
>;

@Injectable()
export class VolumeRankExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'volume-rank',
        description: '거래량순위를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_COND_MRKT_DIV_CODE: {
                    type: 'string',
                    description: '조건 시장 분류 코드 (J:KRX, NX:NXT)',
                },
                FID_INPUT_ISCD: {
                    type: 'string',
                    description: '입력 종목코드 (0000: 전체, 기타: 업종코드)',
                },
                FID_DIV_CLS_CODE: {
                    type: 'string',
                    description:
                        '분류 구분 코드 (0: 전체, 1: 보통주, 2: 우선주)',
                },
                FID_BLNG_CLS_CODE: {
                    type: 'string',
                    description:
                        '소속 구분 코드 (0: 평균거래량, 1: 거래증가율, 2: 평균거래회전율, 3: 거래금액순, 4: 평균거래금액회전율)',
                },
                FID_TRGT_CLS_CODE: {
                    type: 'string',
                    description: '대상 구분 코드 (1 or 0 9자리)',
                },
                FID_TRGT_EXLS_CLS_CODE: {
                    type: 'string',
                    description: '대상 제외 구분 코드 (1 or 0 10자리)',
                },
                FID_INPUT_PRICE_1: {
                    type: 'string',
                    description: '입력 가격1 (가격 ~)',
                },
                FID_INPUT_PRICE_2: {
                    type: 'string',
                    description: '입력 가격2 (~ 가격)',
                },
                FID_VOL_CNT: {
                    type: 'string',
                    description: '거래량 수 (거래량 ~)',
                },
            },
            required: [
                'FID_COND_MRKT_DIV_CODE',
                'FID_INPUT_ISCD',
                'FID_DIV_CLS_CODE',
                'FID_BLNG_CLS_CODE',
                'FID_TRGT_CLS_CODE',
                'FID_TRGT_EXLS_CLS_CODE',
                'FID_INPUT_PRICE_1',
                'FID_INPUT_PRICE_2',
                'FID_VOL_CNT',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///volume-rank/{FID_COND_MRKT_DIV_CODE}/{FID_INPUT_ISCD}',
        name: 'volume-rank',
        description: '거래량순위를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcToolRequest<VolumeRankExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getVolumeRank({
            ...params,
            FID_COND_SCR_DIV_CODE: '20171',
            FID_INPUT_DATE_1: '',
        });
    }
}
