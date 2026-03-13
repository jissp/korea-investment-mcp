import { Module } from '@nestjs/common';
import { McpServerModule } from '@jissp/nestjs-mcp-server';
import { KoreaInvestmentClientModule } from '@modules/korea-investment/korea-investment-client';
import {
    CreditBalanceRankExecutor,
    DailyCreditBalanceExecutor,
    DailyLoanTransExecutor,
    DailyShortSaleExecutor,
    FluctuationRankExecutor,
    FutureOptionPeriodPriceExecutor,
    FutureOptionPriceExecutor,
    HtsTopViewExecutor,
    InquireIndexDailyPriceExecutor,
    InquireIndexPriceExecutor,
    IntstockMultiPriceExecutor,
    InvestorDailyByMarketExecutor,
    InvestorTradeByStockDailyExecutor,
    SearchStockInfoExecutor,
    SearchStocksByNameExecutor,
    ShortSaleRankExecutor,
    VolumeRankExecutor,
} from './executors';

const executors = [
    InquireIndexPriceExecutor,
    InquireIndexDailyPriceExecutor,
    SearchStockInfoExecutor,
    IntstockMultiPriceExecutor,
    InvestorTradeByStockDailyExecutor,
    InvestorDailyByMarketExecutor,
    DailyCreditBalanceExecutor,
    DailyShortSaleExecutor,
    DailyLoanTransExecutor,
    VolumeRankExecutor,
    FluctuationRankExecutor,
    CreditBalanceRankExecutor,
    ShortSaleRankExecutor,
    HtsTopViewExecutor,
    FutureOptionPriceExecutor,
    FutureOptionPeriodPriceExecutor,
    SearchStocksByNameExecutor,
];

@Module({
    imports: [
        KoreaInvestmentClientModule,
        McpServerModule.forFeature({
            executors,
            imports: [KoreaInvestmentClientModule],
        }),
    ],
})
export class KoreaInvestmentExecutorModule {}
