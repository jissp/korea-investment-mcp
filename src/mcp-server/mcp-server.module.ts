import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MetadataScannerModule } from '@modules/metadata-scanner';
import { KoreaInvestmentClientModule } from '@modules/korea-investment/korea-investment-client';
import configuration, { IConfiguration } from '../configuration';
import { McpServerProvider } from './mcp-server.types';
import { McpMetadataRegistryService } from './mcp-metadata-registry.service';
import { McpServerService } from './mcp-server.service';
import { McpServerController } from './mcp-server.controller';
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
];

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        MetadataScannerModule,
        KoreaInvestmentClientModule,
    ],
    controllers: [McpServerController],
    providers: [
        {
            provide: McpServerProvider.MCP_SERVER_CONFIG,
            useFactory: (configService: ConfigService) =>
                configService.get<IConfiguration['koreaInvestment']>(
                    'koreaInvestment',
                ),
            inject: [ConfigService],
        },
        McpMetadataRegistryService,
        McpServerService,
        ...executors,
    ],
    exports: [],
})
export class McpServerModule {}
