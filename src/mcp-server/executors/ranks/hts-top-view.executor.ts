import { Injectable } from '@nestjs/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import { McpResource, McpTool } from '../../decorators';
import { BaseExecutor } from '../../base.executor';
import type { JsonRpcCallRequest } from '../../mcp-server.types';

export type HtsTopViewExecutorParams = Record<string, never>;

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
    execute(request: JsonRpcCallRequest<HtsTopViewExecutorParams>) {
        return this.client.getHtsTopView();
    }
}
