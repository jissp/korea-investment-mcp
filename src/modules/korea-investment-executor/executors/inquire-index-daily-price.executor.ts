import { Injectable } from '@nestjs/common';
import type { InquireIndexDailyPriceParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type InquireIndexDailyPriceExecutorParams = Pick<
    InquireIndexDailyPriceParam,
    'FID_PERIOD_DIV_CODE' | 'FID_INPUT_ISCD' | 'FID_INPUT_DATE_1'
>;

@Injectable()
export class InquireIndexDailyPriceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'inquire-index-daily-price',
        description: '국내업종 일자별지수를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_PERIOD_DIV_CODE: {
                    type: 'string',
                    description: '기간 분류 코드 (D:일별, W:주별, M:월별)',
                },
                FID_INPUT_ISCD: {
                    type: 'string',
                    description:
                        '코스피(0001), 코스닥(1001), 코스피200(2001), ...',
                },
                FID_INPUT_DATE_1: {
                    type: 'string',
                    description: '입력 날짜 (예: 20240223)',
                },
            },
            required: [
                'FID_PERIOD_DIV_CODE',
                'FID_INPUT_ISCD',
                'FID_INPUT_DATE_1',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///inquire-index-daily-price/{FID_PERIOD_DIV_CODE}/{FID_INPUT_ISCD}/{FID_INPUT_DATE_1}',
        name: 'inquire-index-daily-price',
        description: '국내업종 일자별지수를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<InquireIndexDailyPriceExecutorParams>) {
        const {
            params: {
                arguments: {
                    FID_PERIOD_DIV_CODE,
                    FID_INPUT_ISCD,
                    FID_INPUT_DATE_1,
                },
            },
        } = request;

        return this.client.getInquireIndexDailyPrice({
            FID_PERIOD_DIV_CODE,
            FID_INPUT_ISCD,
            FID_INPUT_DATE_1,
        });
    }
}
