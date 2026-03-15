import { Injectable } from '@nestjs/common';
import type { DomesticStockDailyShortSaleParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcToolRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type DailyShortSaleExecutorParams = Omit<
    DomesticStockDailyShortSaleParam,
    'FID_COND_MRKT_DIV_CODE'
>;

@Injectable()
export class DailyShortSaleExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'daily-short-sale',
        description: '국내주식 공매도 일별추이를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_INPUT_ISCD: {
                    type: 'string',
                    description: '입력 종목코드',
                },
                FID_INPUT_DATE_1: {
                    type: 'string',
                    description: '입력 날짜1 (공백시 전체 - 기간 ~)',
                },
                FID_INPUT_DATE_2: {
                    type: 'string',
                    description: '입력 날짜2 (~ 누적)',
                },
            },
            required: [
                'FID_INPUT_ISCD',
                'FID_INPUT_DATE_1',
                'FID_INPUT_DATE_2',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///daily-short-sale/{FID_INPUT_ISCD}/{FID_INPUT_DATE_1}/{FID_INPUT_DATE_2}',
        name: 'daily-short-sale',
        description: '국내주식 공매도 일별추이를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcToolRequest<DailyShortSaleExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getDailyShortSale({
            ...params,
            FID_COND_MRKT_DIV_CODE: 'J',
        });
    }
}
