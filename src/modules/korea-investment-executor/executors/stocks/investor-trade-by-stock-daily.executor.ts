import { Injectable } from '@nestjs/common';
import type { DomesticStockInvestorTradeByStockDailyParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from 'jissp-mcp-server-nestjs';
import { BaseExecutor, McpResource, McpTool } from 'jissp-mcp-server-nestjs';

export type InvestorTradeByStockDailyExecutorParams = Omit<
    DomesticStockInvestorTradeByStockDailyParam,
    'FID_ORG_ADJ_PRC' | 'FID_ETC_CLS_CODE'
>;

@Injectable()
export class InvestorTradeByStockDailyExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'investor-trade-by-stock-daily',
        description: '종목별 투자자매매동향(일별)을 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_COND_MRKT_DIV_CODE: {
                    type: 'string',
                    description: '조건 시장 분류 코드 (J:KRX, NX:NXT, UN:통합)',
                },
                FID_INPUT_ISCD: {
                    type: 'string',
                    description: '입력 종목코드 (6자리)',
                },
                FID_INPUT_DATE_1: {
                    type: 'string',
                    description:
                        '입력 날짜1 (예: 20250812) (해당일 조회는 장 종료 후 정상 조회 가능)',
                },
            },
            required: [
                'FID_COND_MRKT_DIV_CODE',
                'FID_INPUT_ISCD',
                'FID_INPUT_DATE_1',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///investor-trade-by-stock-daily/{FID_COND_MRKT_DIV_CODE}/{FID_INPUT_ISCD}/{FID_INPUT_DATE_1}',
        name: 'investor-trade-by-stock-daily',
        description: '종목별 투자자매매동향(일별)을 조회합니다.',
        mimeType: 'application/json',
    })
    execute(
        request: JsonRpcCallRequest<InvestorTradeByStockDailyExecutorParams>,
    ) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getInvestorTradeByStockDaily({
            ...params,
            FID_ORG_ADJ_PRC: '',
            FID_ETC_CLS_CODE: '',
        });
    }
}
