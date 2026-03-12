import { DynamicModule, Module } from '@nestjs/common';
import { McpServerModuleOptions, McpServerProvider } from './mcp-server.types';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { IConfiguration } from '@base/configuration';
import { MetadataScannerModule } from '@modules/metadata-scanner';
import { KoreaInvestmentClientModule } from '@modules/korea-investment/korea-investment-client';
import { McpServerController } from '@modules/mcp-server/mcp-server.controller';
import { McpMetadataRegistryService } from '@modules/mcp-server/mcp-metadata-registry.service';
import { McpServerService } from '@modules/mcp-server/mcp-server.service';

@Module({})
export class McpServerModule {
    public static forRoot(options: McpServerModuleOptions): DynamicModule {
        return {
            global: true,
            module: McpServerModule,
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
                ...options.executors,
            ],
            exports: [],
        };
    }
}
