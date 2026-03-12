import { Injectable } from '@nestjs/common';
import {
    BaseMultiResponse,
    BaseResponse,
    DomesticFutureOptionPeriodPriceOutput1,
    DomesticFutureOptionPeriodPriceOutput2,
    DomesticFutureOptionPeriodPriceParam,
    DomesticFutureOptionPriceOutput1,
    DomesticFutureOptionPriceOutput2,
    DomesticFutureOptionPriceOutput3,
    DomesticFutureOptionPriceParam,
    DomesticStockCreditBalanceRankOutput1,
    DomesticStockCreditBalanceRankOutput2,
    DomesticStockCreditBalanceRankParam,
    DomesticStockDailyCreditBalanceOutput,
    DomesticStockDailyCreditBalanceParam,
    DomesticStockDailyLoanTransOutput1,
    DomesticStockDailyLoanTransParam,
    DomesticStockDailyShortSaleOutput1,
    DomesticStockDailyShortSaleOutput2,
    DomesticStockDailyShortSaleParam,
    DomesticStockFluctuationRankOutput,
    DomesticStockFluctuationRankParam,
    DomesticStockHtsTopViewOutput1,
    DomesticStockInvestorDailyByMarketOutput,
    DomesticStockInvestorDailyByMarketParam,
    DomesticStockInvestorTradeByStockDailyOutput1,
    DomesticStockInvestorTradeByStockDailyOutput2,
    DomesticStockInvestorTradeByStockDailyParam,
    DomesticStockShortSaleRankOutput,
    DomesticStockShortSaleRankParam,
    DomesticStockVolumeRankOutput,
    DomesticStockVolumeRankParam,
    InquireIndexDailyPriceOutput1,
    InquireIndexDailyPriceOutput2,
    InquireIndexDailyPriceParam,
    InquireIndexPriceOutput,
    InquireIntstockMultpriceOutput,
    InquireIntstockMultpriceParam,
    SearchStockInfoOutput,
    SearchStockInfoParam,
} from '@modules/korea-investment/common';
import { KoreaInvestmentHelperService } from '@modules/korea-investment/korea-investment-helper';

interface QuotationRequestConfig {
    tradeId: string;
    url: string;
    params: Record<string, any>;
}

@Injectable()
export class KoreaInvestmentClient {
    constructor(private readonly helper: KoreaInvestmentHelperService) {}

    /**
     * 국내업종 현재지수[v1_국내주식-063]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/inquire-index-price
     */
    public async getInquireIndexPrice(FID_INPUT_ISCD: string) {
        return this.makeQuotationRequest<BaseResponse<InquireIndexPriceOutput>>(
            {
                url: '/uapi/domestic-stock/v1/quotations/inquire-index-price',
                tradeId: 'FHPUP02100000',
                params: {
                    FID_COND_MRKT_DIV_CODE: 'U',
                    FID_INPUT_ISCD,
                },
            },
        );
    }

    /**
     * 국내업종 일자별지수[v1_국내주식-065]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/inquire-index-daily-price
     */
    public async getInquireIndexDailyPrice(
        params: Pick<
            InquireIndexDailyPriceParam,
            'FID_PERIOD_DIV_CODE' | 'FID_INPUT_ISCD' | 'FID_INPUT_DATE_1'
        >,
    ) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                InquireIndexDailyPriceOutput1,
                InquireIndexDailyPriceOutput2[]
            >
        >({
            url: '/uapi/domestic-stock/v1/quotations/inquire-index-daily-price',
            tradeId: 'FHPUP02120000',
            params: {
                ...params,
                FID_COND_MRKT_DIV_CODE: 'U',
            },
        });
    }

    /**
     * 주식기본조회[v1_국내주식-067]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/search-stock-info
     */
    public async getSearchStockInfo(params: SearchStockInfoParam) {
        return this.makeQuotationRequest<BaseResponse<SearchStockInfoOutput>>({
            url: '/uapi/domestic-stock/v1/quotations/search-stock-info',
            tradeId: 'CTPF1002R',
            params,
        });
    }

    /**
     * 관심종목(멀티종목) 시세조회 [국내주식-205]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/intstock-multprice
     */
    public async getIntstockMultiPrice(params: InquireIntstockMultpriceParam) {
        return this.makeQuotationRequest<
            BaseResponse<InquireIntstockMultpriceOutput>
        >({
            url: '/uapi/domestic-stock/v1/quotations/intstock-multprice',
            tradeId: 'FHKST11300006',
            params,
        });
    }

    /**
     * 종목별 투자자매매동향(일별)
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/investor-trade-by-stock-daily
     * @param params
     */
    public async getInvestorTradeByStockDaily(
        params: DomesticStockInvestorTradeByStockDailyParam,
    ) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                DomesticStockInvestorTradeByStockDailyOutput1,
                DomesticStockInvestorTradeByStockDailyOutput2
            >
        >({
            url: '/uapi/domestic-stock/v1/quotations/investor-trade-by-stock-daily',
            tradeId: 'FHPTJ04160001',
            params,
        });
    }

    /**
     * 시장별 투자자매매동향(일별) [국내주식-075]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/inquire-investor-daily-by-market
     * @param params
     */
    public async getInvestorDailyByMarket(
        params: DomesticStockInvestorDailyByMarketParam,
    ) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockInvestorDailyByMarketOutput>
        >({
            url: '/uapi/domestic-stock/v1/quotations/inquire-investor-daily-by-market',
            tradeId: 'FHPTJ04040000',
            params,
        });
    }

    /**
     * 국내주식 신용잔고 일별추이[국내주식-110]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/daily-credit-balance
     * @param params
     */
    public async getDailyCreditBalance(
        params: DomesticStockDailyCreditBalanceParam,
    ) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockDailyCreditBalanceOutput>
        >({
            url: '/uapi/domestic-stock/v1/quotations/daily-credit-balance',
            tradeId: 'FHPST04760000',
            params,
        });
    }

    /**
     * 국내주식 공매도 일별추이[국내주식-134]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/daily-short-sale
     * @param params
     */
    public async getDailyShortSale(params: DomesticStockDailyShortSaleParam) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                DomesticStockDailyShortSaleOutput1,
                DomesticStockDailyShortSaleOutput2[]
            >
        >({
            url: '/uapi/domestic-stock/v1/quotations/daily-short-sale',
            tradeId: 'FHPST04830000',
            params,
        });
    }

    /**
     * 종목별 일별 대차거래추이 [국내주식-135]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/daily-loan-trans
     * @param params
     */
    public async getDailyLoanTrans(params: DomesticStockDailyLoanTransParam) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockDailyLoanTransOutput1>
        >({
            url: '/uapi/domestic-stock/v1/quotations/daily-loan-trans',
            tradeId: 'HHPST074500C0',
            params,
        });
    }

    /**
     * 거래량순위[v1_국내주식-047]
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/quotations/volume-rank
     * @param params
     */
    public async getVolumeRank(params: DomesticStockVolumeRankParam) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockVolumeRankOutput>
        >({
            url: '/uapi/domestic-stock/v1/quotations/volume-rank',
            tradeId: 'FHPST01710000',
            params,
        });
    }

    /**
     * 국내주식 등락률순위
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/ranking/fluctuation
     * @param params
     */
    public async getFluctuationRank(params: DomesticStockFluctuationRankParam) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockFluctuationRankOutput>
        >({
            url: '/uapi/domestic-stock/v1/ranking/fluctuation',
            tradeId: 'FHPST01700000',
            params,
        });
    }

    /**
     * 국내주식 신용잔고상위
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/ranking/credit-balance
     * @param params
     */
    public async getCreditBalanceRank(
        params: DomesticStockCreditBalanceRankParam,
    ) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                DomesticStockCreditBalanceRankOutput1,
                DomesticStockCreditBalanceRankOutput2[]
            >
        >({
            url: '/uapi/domestic-stock/v1/ranking/credit-balance',
            tradeId: 'FHKST17010000',
            params,
        });
    }

    /**
     * 국내주식 공매도상위
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/ranking/short-sale
     * @param params
     */
    public async getShortSaleRank(params: DomesticStockShortSaleRankParam) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockShortSaleRankOutput>
        >({
            url: '/uapi/domestic-stock/v1/ranking/short-sale',
            tradeId: 'FHPST04820000',
            params,
        });
    }

    /**
     * HTS조회상위20종목
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-stock/v1/ranking/hts-top-view
     * @param params
     */
    public async getHtsTopView(params?: any) {
        return this.makeQuotationRequest<
            BaseResponse<DomesticStockHtsTopViewOutput1>
        >({
            url: '/uapi/domestic-stock/v1/ranking/hts-top-view',
            tradeId: 'HHMCM000100C0',
            params,
        });
    }

    /**
     * 선물옵션 시세조회
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-futureoption/v1/quotations/inquire-price
     * @param params
     */
    public async getFutureOptionPrice(params: DomesticFutureOptionPriceParam) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                DomesticFutureOptionPriceOutput1,
                | DomesticFutureOptionPriceOutput2
                | DomesticFutureOptionPriceOutput3
            >
        >({
            url: '/uapi/domestic-futureoption/v1/quotations/inquire-price',
            tradeId: 'FHMIF10000000',
            params,
        });
    }

    /**
     * 선물옵션 기간별 시세조회(일/주/월/년)
     * @see https://apiportal.koreainvestment.com/apiservice-apiservice?/uapi/domestic-futureoption/v1/quotations/inquire-daily-fuopchartprice
     * @param params
     */
    public async getFutureOptionPeriodPrice(
        params: DomesticFutureOptionPeriodPriceParam,
    ) {
        return this.makeQuotationRequest<
            BaseMultiResponse<
                DomesticFutureOptionPeriodPriceOutput1,
                DomesticFutureOptionPeriodPriceOutput2[]
            >
        >({
            url: '/uapi/domestic-futureoption/v1/quotations/inquire-daily-fuopchartprice',
            tradeId: 'FHKIF03020100',
            params,
        });
    }

    /**
     * 공통 시세 조회 요청 처리
     * @private
     */
    private async makeQuotationRequest<R>(
        config: QuotationRequestConfig,
    ): Promise<R> {
        const headers = await this.helper.buildHeaders(config.tradeId);

        return this.helper.request<null, R>({
            method: 'GET',
            headers,
            url: config.url,
            params: config.params,
        });
    }
}
