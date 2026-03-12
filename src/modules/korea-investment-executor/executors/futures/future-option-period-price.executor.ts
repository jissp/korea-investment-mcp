import { Injectable } from '@nestjs/common';
import type { DomesticFutureOptionPeriodPriceParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcCallRequest } from 'jissp-mcp-server-nestjs';
import { BaseExecutor, McpResource, McpTool } from 'jissp-mcp-server-nestjs';

export type FutureOptionPeriodPriceExecutorParams =
    DomesticFutureOptionPeriodPriceParam;

@Injectable()
export class FutureOptionPeriodPriceExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'future-option-period-price',
        description: '선물옵션 기간별 시세조회(일/주/월/년)를 합니다.',
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
                    description: '종목코드 (지수선물: 6자리, 지수옵션: 9자리)',
                },
                FID_INPUT_DATE_1: {
                    type: 'string',
                    description: '조회 시작일자 (예: 20220401)',
                },
                FID_INPUT_DATE_2: {
                    type: 'string',
                    description: '조회 종료일자 (예: 20220524)',
                },
                FID_PERIOD_DIV_CODE: {
                    type: 'string',
                    description:
                        '기간분류코드 (D: 일봉, W: 주봉, M: 월봉, Y: 년봉)',
                },
            },
            required: [
                'FID_COND_MRKT_DIV_CODE',
                'FID_INPUT_ISCD',
                'FID_INPUT_DATE_1',
                'FID_INPUT_DATE_2',
                'FID_PERIOD_DIV_CODE',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///future-option-period-price/{FID_COND_MRKT_DIV_CODE}/{FID_INPUT_ISCD}',
        name: 'future-option-period-price',
        description: '선물옵션 기간별 시세조회(일/주/월/년)를 합니다.',
        mimeType: 'application/json',
    })
    execute(
        request: JsonRpcCallRequest<FutureOptionPeriodPriceExecutorParams>,
    ) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getFutureOptionPeriodPrice(params);
    }
}
