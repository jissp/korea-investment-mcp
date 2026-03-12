import { Module } from '@nestjs/common';
import { McpServerModule } from '@modules/mcp-server';
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
} from '@app/executors';

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
        McpServerModule.forRoot({
            executors,
        }),
    ],
})
export class AppModule {}
