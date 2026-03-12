import { BaseParser } from '../base.parser';

export interface ThemeMst {
    themeCode: string;
    themeName: string;
    stockCode: string;
}

export class ThemeParser extends BaseParser<ThemeMst> {
    private static readonly THEME_CODE_LENGTH = 3;
    private static readonly STOCK_CODE_LENGTH = 10;

    protected fieldIndices: number[] = [
        ThemeParser.THEME_CODE_LENGTH,
        ThemeParser.STOCK_CODE_LENGTH,
    ];

    constructor() {
        super();
    }

    protected toObject([themeCode, themeName, stockCode]: string[]): ThemeMst {
        return {
            themeCode,
            themeName,
            stockCode,
        };
    }
}
