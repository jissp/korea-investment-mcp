import { Injectable } from '@nestjs/common';
import type { DomesticFutureOptionPriceParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from '../../mcp-server.types';
import { McpResource, McpTool } from '../../decorators';
import { BaseExecutor } from '../../base.executor';

export type FutureOptionPriceExecutorParams = DomesticFutureOptionPriceParam;

@Injectable()
export class FutureOptionPriceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'future-option-price',
        description: '선물옵션 시세조회를 합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                FID_COND_MRKT_DIV_CODE: {
                    type: 'string',
                    description:
                        'FID 조건 시장 분류 코드 (F: 지수선물, O: 지수옵션, JF: 주식선물, JO: 주식옵션, CF: 상품선물, CM: 야간선물, EU: 야간옵션)',
                },
                FID_INPUT_ISCD: {
                    type: 'string',
                    description: 'FID 입력 종목코드 (예: 101S03)',
                },
            },
            required: ['FID_COND_MRKT_DIV_CODE', 'FID_INPUT_ISCD'],
        },
    })
    @McpResource({
        uri: 'quotation:///future-option-price/{FID_COND_MRKT_DIV_CODE}/{FID_INPUT_ISCD}',
        name: 'future-option-price',
        description: '선물옵션 시세조회를 합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcCallRequest<FutureOptionPriceExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getFutureOptionPrice(params);
    }
}
