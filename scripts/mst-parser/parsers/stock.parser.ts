import { BaseParser } from '../base.parser';

export interface StockMst {
    shortCode: string;
    code: string;
    name: string;
}

export class StockParser extends BaseParser<StockMst> {
    private static readonly SHORT_CODE_END = 9;
    private static readonly CODE_END = 21;
    private static readonly NAME_END = 57;

    protected fieldIndices: number[] = [
        StockParser.SHORT_CODE_END,
        StockParser.CODE_END,
        StockParser.NAME_END,
    ];

    constructor() {
        super();
    }

    protected toObject([shortCode, code, name]: string[]): StockMst {
        return {
            shortCode,
            code,
            name,
        };
    }
}
