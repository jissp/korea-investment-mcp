import { Injectable } from '@nestjs/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import { BaseExecutor, McpResource, McpTool } from '@modules/mcp-server';

@Injectable()
export class HtsTopViewExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'hts-top-view',
        description: 'HTS조회상위20종목을 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {},
            required: [],
        },
    })
    @McpResource({
        uri: 'quotation:///hts-top-view',
        name: 'hts-top-view',
        description: 'HTS조회상위20종목을 조회합니다.',
        mimeType: 'application/json',
    })
    execute() {
        return this.client.getHtsTopView();
    }
}
