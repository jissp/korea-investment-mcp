import { Injectable } from '@nestjs/common';
import type { DomesticStockDailyLoanTransParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type DailyLoanTransExecutorParams = Omit<
    DomesticStockDailyLoanTransParam,
    'CTS'
>;

@Injectable()
export class DailyLoanTransExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'daily-loan-trans',
        description: '종목별 일별 대차거래추이를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                MRKT_DIV_CLS_CODE: {
                    type: 'string',
                    description: '조회구분 (1: 코스피, 2: 코스닥, 3: 종목)',
                },
                MKSC_SHRN_ISCD: {
                    type: 'string',
                    description: '종목코드',
                },
                START_DATE: {
                    type: 'string',
                    description: '조회시작일시 (조회기간 ~)',
                },
                END_DATE: {
                    type: 'string',
                    description: '조회종료일시 (~ 조회기간)',
                },
            },
            required: [
                'MRKT_DIV_CLS_CODE',
                'MKSC_SHRN_ISCD',
                'START_DATE',
                'END_DATE',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///daily-loan-trans/{MRKT_DIV_CLS_CODE}/{MKSC_SHRN_ISCD}',
        name: 'daily-loan-trans',
        description: '종목별 일별 대차거래추이를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<DailyLoanTransExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getDailyLoanTrans({ ...params, CTS: '' });
    }
}
