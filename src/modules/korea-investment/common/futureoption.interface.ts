/**
 * 선물옵션 시세 Param DTO
 */
export interface DomesticFutureOptionPriceParam {
    /**
     * FID 조건 시장 분류 코드
     * F: 지수선물, O:지수옵션
     * JF: 주식선물, JO:주식옵션
     * CF: 상품선물(금), 금리선물(국채), 통화선물(달러)
     * CM: 야간선물, EU: 야간옵션
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * FID 입력 종목코드
     * 종목코드 (예: 101S03)
     */
    FID_INPUT_ISCD: string;
}

/**
 * 선물옵션 시세 Output1 DTO
 */
export class DomesticFutureOptionPriceOutput1 {
    /**
     * HTS 한글 종목명
     */
    hts_kor_isnm: string;

    /**
     * 선물 현재가
     */
    futs_prpr: string;

    /**
     * 선물 전일 대비
     */
    futs_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 선물 전일 종가
     */
    futs_prdy_clpr: string;

    /**
     * 선물 전일 대비율
     */
    futs_prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * HTS 미결제 약정 수량
     */
    hts_otst_stpl_qty: string;

    /**
     * 미결제 약정 수량 증감
     */
    otst_stpl_qty_icdc: string;

    /**
     * 선물 시가2
     */
    futs_oprc: string;

    /**
     * 선물 최고가
     */
    futs_hgpr: string;

    /**
     * 선물 최저가
     */
    futs_lwpr: string;

    /**
     * 선물 상한가
     */
    futs_mxpr: string;

    /**
     * 선물 하한가
     */
    futs_llam: string;

    /**
     * 베이시스
     */
    basis: string;

    /**
     * 선물 기준가
     */
    futs_sdpr: string;

    /**
     * HTS 이론가
     */
    hts_thpr: string;

    /**
     * 괴리율
     */
    dprt: string;

    /**
     * 서킷브레이커 적용 상한가
     */
    crbr_aply_mxpr: string;

    /**
     * 서킷브레이커 적용 하한가
     */
    crbr_aply_llam: string;

    /**
     * 선물 최종 거래 일자
     */
    futs_last_tr_date: string;

    /**
     * HTS 잔존 일수
     */
    hts_rmnn_dynu: string;

    /**
     * 선물 상장 중 최고가
     */
    futs_lstn_medm_hgpr: string;

    /**
     * 선물 상장 중 최저가
     */
    futs_lstn_medm_lwpr: string;

    /**
     * 델타 값
     */
    delta_val: string;

    /**
     * 감마
     */
    gama: string;

    /**
     * 세타
     */
    theta: string;

    /**
     * 베가
     */
    vega: string;

    /**
     * 로우
     */
    rho: string;

    /**
     * 역사적 변동성
     */
    hist_vltl: string;

    /**
     * HTS 내재 변동성
     */
    hts_ints_vltl: string;

    /**
     * 시장 베이시스
     */
    mrkt_basis: string;

    /**
     * 행사가
     */
    acpr: string;
}

/**
 * 선물옵션 시세 Output2 DTO
 */
export class DomesticFutureOptionPriceOutput2 {
    /**
     * 업종 구분 코드
     */
    bstp_cls_code: string;

    /**
     * HTS 한글 종목명
     */
    hts_kor_isnm: string;

    /**
     * 업종 지수 현재가
     */
    bstp_nmix_prpr: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 업종 지수 전일 대비
     */
    bstp_nmix_prdy_vrss: string;

    /**
     * 업종 지수 전일 대비율
     */
    bstp_nmix_prdy_ctrt: string;
}

/**
 * 선물옵션 시세 Output3 DTO
 */
export class DomesticFutureOptionPriceOutput3 {
    /**
     * 업종 구분 코드
     */
    bstp_cls_code: string;

    /**
     * HTS 한글 종목명
     */
    hts_kor_isnm: string;

    /**
     * 업종 지수 현재가
     */
    bstp_nmix_prpr: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 업종 지수 전일 대비
     */
    bstp_nmix_prdy_vrss: string;

    /**
     * 업종 지수 전일 대비율
     */
    bstp_nmix_prdy_ctrt: string;
}

/**
 * 선물옵션기간별시세(일/주/월/년) Param DTO
 */
export interface DomesticFutureOptionPeriodPriceParam {
    /**
     * FID 조건 시장 분류 코드
     * F: 지수선물, O:지수옵션
     * JF: 주식선물, JO:주식옵션,
     * CF: 상품선물(금), 금리선물(국채), 통화선물(달러)
     * CM: 야간선물, EU: 야간옵션
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * 종목코드
     * 종목번호 (지수선물:6자리, 지수옵션 9자리)
     */
    FID_INPUT_ISCD: string;

    /**
     * 조회 시작일자
     * ex. 20220401
     */
    FID_INPUT_DATE_1: string;

    /**
     * 조회 종료일자
     * ex. 20220524
     */
    FID_INPUT_DATE_2: string;

    /**
     * 기간분류코드
     * D:일봉 W:주봉, M:월봉, Y:년봉
     */
    FID_PERIOD_DIV_CODE: string;
}

/**
 * 선물옵션기간별시세(일/주/월/년) Output1 DTO (상세기본정보)
 */
export class DomesticFutureOptionPeriodPriceOutput1 {
    /**
     * 전일 대비
     */
    futs_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 선물 전일 대비율
     */
    futs_prdy_ctrt: string;

    /**
     * 선물 전일 종가
     */
    futs_prdy_clpr: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * HTS 한글 종목명
     */
    hts_kor_isnm: string;

    /**
     * 현재가
     */
    futs_prpr: string;

    /**
     * 단축 종목코드
     */
    futs_shrn_iscd: string;

    /**
     * 전일 거래량
     */
    prdy_vol: string;

    /**
     * 상한가
     */
    futs_mxpr: string;

    /**
     * 하한가
     */
    futs_llam: string;

    /**
     * 시가
     */
    futs_oprc: string;

    /**
     * 최고가
     */
    futs_hgpr: string;

    /**
     * 최저가
     */
    futs_lwpr: string;

    /**
     * 전일 시가
     */
    futs_prdy_oprc: string;

    /**
     * 전일 최고가
     */
    futs_prdy_hgpr: string;

    /**
     * 전일 최저가
     */
    futs_prdy_lwpr: string;

    /**
     * 매도호가
     */
    futs_askp: string;

    /**
     * 매수호가
     */
    futs_bidp: string;

    /**
     * 베이시스
     */
    basis: string;

    /**
     * KOSPI200 지수
     */
    kospi200_nmix: string;

    /**
     * KOSPI200 전일 대비
     */
    kospi200_prdy_vrss: string;

    /**
     * KOSPI200 전일 대비율
     */
    kospi200_prdy_ctrt: string;

    /**
     * 전일 대비 부호
     */
    kospi200_prdy_vrss_sign: string;

    /**
     * HTS 미결제 약정 수량
     */
    hts_otst_stpl_qty: string;

    /**
     * 미결제 약정 수량 증감
     */
    otst_stpl_qty_icdc: string;

    /**
     * 당일 체결강도
     */
    tday_rltv: string;

    /**
     * HTS 이론가
     */
    hts_thpr: string;

    /**
     * 괴리율
     */
    dprt: string;
}

/**
 * 선물옵션기간별시세(일/주/월/년) Output2 DTO (기간별 조회데이터)
 */
export class DomesticFutureOptionPeriodPriceOutput2 {
    /**
     * 영업 일자
     */
    stck_bsop_date: string;

    /**
     * 현재가
     */
    futs_prpr: string;

    /**
     * 시가
     */
    futs_oprc: string;

    /**
     * 최고가
     */
    futs_hgpr: string;

    /**
     * 최저가
     */
    futs_lwpr: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 변경 여부
     */
    mod_yn: string;
}
