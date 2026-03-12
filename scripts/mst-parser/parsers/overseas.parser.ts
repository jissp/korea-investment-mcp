import { BaseParser } from '../base.parser';

export interface OverseasIndexData {
    typeCode: string;
    symbol: string;
    englishName: string;
    koreanName: string;
    industryCode: string;
    isDow30Included: string;
    isNasdaq100Included: string;
    isSp500Included: string;
    exchangeCode: string;
    countryCode: string;
}

export class OverseasParser extends BaseParser<OverseasIndexData> {
    private static readonly TYPE_CODE_END = 1;
    private static readonly SYMBOL_END = 11;
    private static readonly ENGLISH_NAME_END = 50;
    private static readonly KOREAN_NAME_END = 75;
    private static readonly INDUSTRY_CODE_END = 79;
    private static readonly IS_DOW_30_INCLUDED_END = 80;
    private static readonly IS_NASDAQ_100_INCLUDED_END = 81;
    private static readonly IS_SP_500_INCLUDED_END = 82;
    private static readonly EXCHANGE_CODE_END = 86;
    private static readonly COUNTRY_CODE_END = 89;

    protected fieldIndices: number[] = [
        OverseasParser.TYPE_CODE_END,
        OverseasParser.SYMBOL_END,
        OverseasParser.ENGLISH_NAME_END,
        OverseasParser.KOREAN_NAME_END,
        OverseasParser.INDUSTRY_CODE_END,
        OverseasParser.IS_DOW_30_INCLUDED_END,
        OverseasParser.IS_NASDAQ_100_INCLUDED_END,
        OverseasParser.IS_SP_500_INCLUDED_END,
        OverseasParser.EXCHANGE_CODE_END,
        OverseasParser.COUNTRY_CODE_END,
    ];

    constructor() {
        super();
    }

    protected toObject([
        typeCode,
        symbol,
        englishName,
        koreanName,
        industryCode,
        isDow30Included,
        isNasdaq100Included,
        isSp500Included,
        exchangeCode,
        countryCode,
    ]: string[]): OverseasIndexData {
        return {
            typeCode: typeCode.trim(),
            symbol: symbol.trim(),
            englishName: englishName.replace(/,/g, '').trim(),
            koreanName: koreanName.replace(/,/g, '').trim(),
            industryCode: industryCode.replace(/[^A-Z]/g, ''),
            isDow30Included: isDow30Included.replace(/[^0-1]/g, ''),
            isNasdaq100Included: isNasdaq100Included.replace(/[^0-1]/g, ''),
            isSp500Included: isSp500Included.replace(/[^0-1]/g, ''),
            exchangeCode: exchangeCode.trim(),
            countryCode: countryCode.trim(),
        };
    }
}