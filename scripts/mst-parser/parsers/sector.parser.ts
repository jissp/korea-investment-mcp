import { BaseParser } from '../base.parser';

export interface SectorMst {
    shortCode: string;
    code: string;
}

export class SectorParser extends BaseParser<SectorMst> {
    private static readonly SHORT_CODE_START = 1;
    private static readonly SHORT_CODE_END = 5;
    private static readonly CODE_END = 43;

    protected fieldIndices: number[] = [
        SectorParser.SHORT_CODE_START,
        SectorParser.SHORT_CODE_END,
        SectorParser.CODE_END,
    ];

    constructor() {
        super();
    }

    protected toObject([, shortCode, code]: string[]): SectorMst {
        return {
            shortCode,
            code,
        };
    }
}
