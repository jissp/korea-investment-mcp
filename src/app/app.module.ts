import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { McpServerModule } from '@jissp/nestjs-mcp-server';
import { KoreaInvestmentExecutorModule } from '@modules/korea-investment-executor';
import configuration from '@base/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        McpServerModule.forRoot(),
        KoreaInvestmentExecutorModule,
    ],
})
export class AppModule {}
