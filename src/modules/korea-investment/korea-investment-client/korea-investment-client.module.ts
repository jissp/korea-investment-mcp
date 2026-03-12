import { Module } from '@nestjs/common';
import { KoreaInvestmentHelperModule } from '@modules/korea-investment/korea-investment-helper';
import { KoreaInvestmentClient } from './korea-investment.client';

@Module({
    imports: [KoreaInvestmentHelperModule],
    providers: [KoreaInvestmentClient],
    exports: [KoreaInvestmentClient],
})
export class KoreaInvestmentClientModule {}
