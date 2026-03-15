import { Injectable } from '@nestjs/common';
import type { DomesticStockFluctuationRankParam } from '@modules/korea-investment/common';
import { KoreaInvestmentClient } from '@modules/korea-investment/korea-investment-client';
import type { JsonRpcToolRequest } from '@jissp/nestjs-mcp-server';
import { BaseExecutor, McpResource, McpTool } from '@jissp/nestjs-mcp-server';

export type FluctuationRankExecutorParams = Omit<
    DomesticStockFluctuationRankParam,
    'fid_cond_scr_div_code'
>;

@Injectable()
export class FluctuationRankExecutor implements BaseExecutor {
    constructor(private readonly client: KoreaInvestmentClient) {}

    @McpTool({
        name: 'fluctuation-rank',
        description: '국내주식 등락률순위를 조회합니다.',
        inputSchema: {
            type: 'object',
            properties: {
                fid_rsfl_rate2: {
                    type: 'string',
                    description: '등락 비율2 (공백시 전체 ~ 비율)',
                },
                fid_cond_mrkt_div_code: {
                    type: 'string',
                    description: '조건 시장 분류 코드 (J:KRX, NX:NXT)',
                },
                fid_input_iscd: {
                    type: 'string',
                    description:
                        '입력 종목코드 (0000: 전체, 0001: 코스피, 1001: 코스닥, 2001: 코스피200)',
                },
                fid_rank_sort_cls_code: {
                    type: 'string',
                    description:
                        '순위 정렬 구분 코드 (0: 상승율순, 1: 하락율순, 2: 시가대비상승율, 3: 시가대비하락율, 4: 변동율)',
                },
                fid_input_cnt_1: {
                    type: 'string',
                    description: '입력 수1 (0: 전체, 누적일수 입력)',
                },
                fid_prc_cls_code: {
                    type: 'string',
                    description: '가격 구분 코드',
                },
                fid_input_price_1: {
                    type: 'string',
                    description: '입력 가격1 (공백시 전체 - 가격 ~)',
                },
                fid_input_price_2: {
                    type: 'string',
                    description: '입력 가격2 (공백시 전체 - ~ 가격)',
                },
                fid_vol_cnt: {
                    type: 'string',
                    description: '거래량 수 (공백시 전체 - 거래량 ~)',
                },
                fid_trgt_cls_code: {
                    type: 'string',
                    description: '대상 구분 코드 (0: 전체)',
                },
                fid_trgt_exls_cls_code: {
                    type: 'string',
                    description: '대상 제외 구분 코드 (0: 전체)',
                },
                fid_div_cls_code: {
                    type: 'string',
                    description: '분류 구분 코드 (0: 전체)',
                },
                fid_rsfl_rate1: {
                    type: 'string',
                    description: '등락 비율1 (공백시 전체 - 비율 ~)',
                },
            },
            required: [
                'fid_rsfl_rate2',
                'fid_cond_mrkt_div_code',
                'fid_input_iscd',
                'fid_rank_sort_cls_code',
                'fid_input_cnt_1',
                'fid_prc_cls_code',
                'fid_input_price_1',
                'fid_input_price_2',
                'fid_vol_cnt',
                'fid_trgt_cls_code',
                'fid_trgt_exls_cls_code',
                'fid_div_cls_code',
                'fid_rsfl_rate1',
            ],
        },
    })
    @McpResource({
        uri: 'quotation:///fluctuation-rank/{fid_input_iscd}/{fid_rank_sort_cls_code}',
        name: 'fluctuation-rank',
        description: '국내주식 등락률순위를 조회합니다.',
        mimeType: 'application/json',
    })
    execute(request: JsonRpcToolRequest<FluctuationRankExecutorParams>) {
        const {
            params: { arguments: params },
        } = request;

        return this.client.getFluctuationRank({
            ...params,
            fid_cond_scr_div_code: '20170',
        });
    }
}
