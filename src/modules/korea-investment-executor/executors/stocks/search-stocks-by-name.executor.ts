import { Injectable } from '@nestjs/common';
import type { JsonRpcCallRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';
import kospiData from '@common/assets/kospi_code.json';
import kosdaqData from '@common/assets/kosdaq_code.json';

export type SearchStocksByNameParams = {
    stockName: string;
};

@Injectable()
export class SearchStocksByNameExecutor implements BaseExecutor {
    @McpTool({
        name: 'search-stocks-by-name',
        description:
            '종목 이름으로 종목 코드를 조회합니다. (부분 검색) \n검색 결과에서 단축코드(shortCode)를 종목코드로 사용해야합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                stockName: {
                    type: 'string',
                    description: '종목명 (예: 삼성)',
                },
            },
            required: ['stockName'],
        },
    })
    @McpResource({
        uri: 'quotation:///search-stocks-by-name/{stockName}',
        name: 'search-stocks-by-name',
        description:
            '종목 이름으로 종목 코드를 조회합니다. (부분 검색) \n검색 결과에서 단축코드(shortCode)를 종목코드로 사용해야합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<SearchStocksByNameParams>) {
        const {
            params: { arguments: params },
        } = request;

        return [
            ...kospiData.filter((data) => data.name.includes(params.stockName)),
            ...kosdaqData.filter((data) =>
                data.name.includes(params.stockName),
            ),
        ];
    }
}
