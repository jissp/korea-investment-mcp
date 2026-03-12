import { Injectable } from '@nestjs/common';
import type { SearchStockInfoParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '@modules/mcp-server/mcp-server.types';
import { BaseExecutor, McpResource, McpTool } from '@modules/mcp-server';

export type SearchStockInfoExecutorParams = SearchStockInfoParam;

@Injectable()
export class SearchStockInfoExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'search-stock-info',
        description: '주식기본정보를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                PRDT_TYPE_CD: {
                    type: 'string',
                    description:
                        '상품유형코드 (300: 주식/ETF/ETN/ELW, 301: 선물옵션, 302: 채권, 306: ELS)',
                },
                PDNO: {
                    type: 'string',
                    description: '상품번호 (종목번호 6자리, ETN은 Q로 시작)',
                },
            },
            required: ['PRDT_TYPE_CD', 'PDNO'],
        },
    })
    @McpResource({
        uri: 'quotation:///search-stock-info/{PRDT_TYPE_CD}/{PDNO}',
        name: 'search-stock-info',
        description: '주식기본정보를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<SearchStockInfoExecutorParams>) {
        const {
            params: {
                arguments: { PRDT_TYPE_CD, PDNO },
            },
        } = request;

        return this.client.getSearchStockInfo({
            PRDT_TYPE_CD,
            PDNO,
        });
    }
}
