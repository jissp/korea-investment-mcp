import { Injectable } from '@nestjs/common';
import type { DomesticStockDailyCreditBalanceParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '@modules/mcp-server/mcp-server.types';
import { BaseExecutor, McpResource, McpTool } from '@modules/mcp-server';

export type DailyCreditBalanceExecutorParams = Omit<
    DomesticStockDailyCreditBalanceParam,
    'fid_cond_mrkt_div_code' | 'fid_cond_scr_div_code'
>;

@Injectable()
export class DailyCreditBalanceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'daily-credit-balance',
        description: '국내주식 신용잔고 일별추이를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                fid_input_iscd: {
                    type: 'string',
                    description: '종목코드 (예: 005930)',
                },
                fid_input_date_1: {
                    type: 'string',
                    description: '결제일자 (예: 20240313)',
                },
            },
            required: ['fid_input_iscd', 'fid_input_date_1'],
        },
    })
    @McpResource({
        uri: 'quotation:///daily-credit-balance/{fid_input_iscd}/{fid_input_date_1}',
        name: 'daily-credit-balance',
        description: '국내주식 신용잔고 일별추이를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<DailyCreditBalanceExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getDailyCreditBalance({
            ...params,
            fid_cond_mrkt_div_code: 'J',
            fid_cond_scr_div_code: '20476',
        });
    }
}
