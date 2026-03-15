import { Injectable } from '@nestjs/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcToolRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type GetStockExecutorParams = {
    FID_INPUT_ISCD: string;
};

@Injectable()
export class InquireIndexPriceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'inquire-index-price',
        description: '국내업종 현재지수를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_INPUT_ISCD: {
                    type: 'string',
                    description:
                        '코스피(0001), 코스닥(1001), 코스피200(2001), ...',
                },
            },
            required: ['FID_INPUT_ISCD'],
        },
    })
    @McpResource({
        uri: 'quotation:///inquire-index-price/{FID_INPUT_ISCD}',
        name: 'inquire-index-price',
        description: '종목 코드를 기반으로 종목의 정보를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcToolRequest<GetStockExecutorParams>) {
        const {
            params: {
                arguments: { FID_INPUT_ISCD },
            },
        } = request;

        return this.client.getInquireIndexPrice(FID_INPUT_ISCD);
    }
}
