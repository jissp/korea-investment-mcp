import { ConstructorType } from '@base/common';
import {
    OverseasParser,
    SectorParser,
    StockParser,
    ThemeParser,
} from './parsers';
import { BaseParser } from './base.parser';
import { MstReader } from './mst-reader';

interface ParserConfig {
    fileNames: string[];
    parser: ConstructorType<BaseParser>;
}

const PARSER_CONFIG: ParserConfig[] = [
    { fileNames: ['idxcode'], parser: SectorParser },
    {
        fileNames: [
            'kospi_code',
            'kosdaq_code',
            'nxt_kospi_code',
            'nxt_kosdaq_code',
        ],
        parser: StockParser,
    },
    { fileNames: ['frgn_code'], parser: OverseasParser },
    { fileNames: ['theme_code'], parser: ThemeParser },
];

function processParser(config: ParserConfig): void {
    const parserInstance = new config.parser();

    for (const fileName of config.fileNames) {
        const reader = new MstReader();
        const mstContent = reader.read(fileName);

        const parsedMstContents = parserInstance.parse(mstContent);

        parserInstance.saveAsset(fileName, parsedMstContents);

        console.log(`saved ${fileName}`);
    }
}

function main(): void {
    PARSER_CONFIG.forEach(processParser);
}

main();
