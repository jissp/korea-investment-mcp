import { Injectable } from '@nestjs/common';
import type { DomesticStockInvestorDailyByMarketParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from 'jissp-mcp-server-nestjs';
import { BaseExecutor, McpResource, McpTool } from 'jissp-mcp-server-nestjs';

export type InvestorDailyByMarketExecutorParams = Omit<
    DomesticStockInvestorDailyByMarketParam,
    'FID_COND_MRKT_DIV_CODE'
>;

@Injectable()
export class InvestorDailyByMarketExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'investor-daily-by-market',
        description: '시장별 투자자매매동향(일별)을 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_INPUT_ISCD: {
                    type: 'string',
                    description: '입력 종목코드 (코스피, 코스닥: 업종분류코드)',
                },
                FID_INPUT_DATE_1: {
                    type: 'string',
                    description: '입력 날짜1 (예: 20240517)',
                },
                FID_INPUT_ISCD_1: {
                    type: 'string',
                    description: '입력 종목코드 (코스피(KSP), 코스닥(KSQ))',
                },
                FID_INPUT_DATE_2: {
                    type: 'string',
                    description: '입력 날짜2 (입력 날짜1과 동일날짜)',
                },
                FID_INPUT_ISCD_2: {
                    type: 'string',
                    description: '하위 분류코드 (업종분류코드)',
                },
            },
            required: [
                'FID_INPUT_ISCD',
                'FID_INPUT_DATE_1',
                'FID_INPUT_ISCD_1',
                'FID_INPUT_DATE_2',
                'FID_INPUT_ISCD_2',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///investor-daily-by-market/{FID_COND_MRKT_DIV_CODE}/{FID_INPUT_ISCD}',
        name: 'investor-daily-by-market',
        description: '시장별 투자자매매동향(일별)을 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<InvestorDailyByMarketExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getInvestorDailyByMarket({
            ...params,
            FID_COND_MRKT_DIV_CODE: 'U',
        });
    }
}
