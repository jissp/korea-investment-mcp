import { Injectable } from '@nestjs/common';
import type { InquireIntstockMultpriceParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from 'jissp-mcp-server-nestjs';
import { BaseExecutor, McpResource, McpTool } from 'jissp-mcp-server-nestjs';

export type IntstockMultiPriceExecutorParams = InquireIntstockMultpriceParam;

@Injectable()
export class IntstockMultiPriceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'intstock-multi-price',
        description: '관심종목(멀티종목) 시세조회를 합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_COND_MRKT_DIV_CODE_1: {
                    type: 'string',
                    description:
                        '조건 시장 분류 코드1 (J: KRX, NX: NXT, UN: 통합)',
                },
                FID_INPUT_ISCD_1: {
                    type: 'string',
                    description: '입력 종목코드1 (예: 005930)',
                },
                FID_COND_MRKT_DIV_CODE_2: {
                    type: 'string',
                    description: '조건 시장 분류 코드2 (선택)',
                },
                FID_INPUT_ISCD_2: {
                    type: 'string',
                    description: '입력 종목코드2 (선택)',
                },
                FID_COND_MRKT_DIV_CODE_3: {
                    type: 'string',
                    description: '조건 시장 분류 코드3 (선택)',
                },
                FID_INPUT_ISCD_3: {
                    type: 'string',
                    description: '입력 종목코드3 (선택)',
                },
            },
            required: ['FID_COND_MRKT_DIV_CODE_1', 'FID_INPUT_ISCD_1'],
        },
    })
    @McpResource({
        uri: 'quotation:///intstock-multi-price/{FID_COND_MRKT_DIV_CODE_1}/{FID_INPUT_ISCD_1}',
        name: 'intstock-multi-price',
        description: '관심종목(멀티종목) 시세조회를 합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<IntstockMultiPriceExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getIntstockMultiPrice(params);
    }
}
