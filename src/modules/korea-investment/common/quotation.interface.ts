export interface InquireIndexPriceParam {
    /**
     * FID 조건 시장 분류 코드
     * 시장구분코드 (업종 U)
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * FID 입력 종목코드
     * 코스피(0001), 코스닥(1001), 코스피200(2001) 등
     */
    FID_INPUT_ISCD: string;
}

export class InquireIndexPriceOutput {
    /**
     * 업종 지수 현재가
     */
    bstp_nmix_prpr: string;

    /**
     * 업종 지수 전일 대비
     */
    bstp_nmix_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 업종 지수 전일 대비율
     */
    bstp_nmix_prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 전일 거래량
     */
    prdy_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 전일 거래 대금
     */
    prdy_tr_pbmn: string;

    /**
     * 업종 지수 시가2
     */
    bstp_nmix_oprc: string;

    /**
     * 전일 지수 대비 지수 시가2
     */
    prdy_nmix_vrss_nmix_oprc: string;

    /**
     * 시가2 대비 현재가 부호
     */
    oprc_vrss_prpr_sign: string;

    /**
     * 업종 지수 시가2 전일 대비율
     */
    bstp_nmix_oprc_prdy_ctrt: string;

    /**
     * 업종 지수 최고가
     */
    bstp_nmix_hgpr: string;

    /**
     * 전일 지수 대비 지수 최고가
     */
    prdy_nmix_vrss_nmix_hgpr: string;

    /**
     * 최고가 대비 현재가 부호
     */
    hgpr_vrss_prpr_sign: string;

    /**
     * 업종 지수 최고가 전일 대비율
     */
    bstp_nmix_hgpr_prdy_ctrt: string;

    /**
     * 업종 지수 최저가
     */
    bstp_nmix_lwpr: string;

    /**
     * 전일 종가 대비 최저가
     */
    prdy_clpr_vrss_lwpr: string;

    /**
     * 최저가 대비 현재가 부호
     */
    lwpr_vrss_prpr_sign: string;

    /**
     * 전일 종가 대비 최저가 비율
     */
    prdy_clpr_vrss_lwpr_rate: string;

    /**
     * 상승 종목 수
     */
    ascn_issu_cnt: string;

    /**
     * 상한 종목 수
     */
    uplm_issu_cnt: string;

    /**
     * 보합 종목 수
     */
    stnr_issu_cnt: string;

    /**
     * 하락 종목 수
     */
    down_issu_cnt: string;

    /**
     * 하한 종목 수
     */
    lslm_issu_cnt: string;

    /**
     * 연중업종지수최고가
     */
    dryy_bstp_nmix_hgpr: string;

    /**
     * 연중 최고가 대비 현재가 비율
     */
    dryy_hgpr_vrss_prpr_rate: string;

    /**
     * 연중업종지수최고가일자
     */
    dryy_bstp_nmix_hgpr_date: string;

    /**
     * 연중업종지수최저가
     */
    dryy_bstp_nmix_lwpr: string;

    /**
     * 연중 최저가 대비 현재가 비율
     */
    dryy_lwpr_vrss_prpr_rate: string;

    /**
     * 연중업종지수최저가일자
     */
    dryy_bstp_nmix_lwpr_date: string;

    /**
     * 총 매도호가 잔량
     */
    total_askp_rsqn: string;

    /**
     * 총 매수호가 잔량
     */
    total_bidp_rsqn: string;

    /**
     * 매도 잔량 비율
     */
    seln_rsqn_rate: string;

    /**
     * 매수2 잔량 비율
     */
    shnu_rsqn_rate: string;

    /**
     * 순매수 잔량
     */
    ntby_rsqn: string;
}

export interface InquireIndexDailyPriceParam {
    /**
     * FID 기간 분류 코드
     * 일/주/월 구분코드 ( D:일별 , W:주별, M:월별 )
     */
    FID_PERIOD_DIV_CODE: string;

    /**
     * FID 조건 시장 분류 코드
     * 시장구분코드 (업종 U)
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * FID 입력 종목코드
     * 코스피(0001), 코스닥(1001), 코스피200(2001) 등
     */
    FID_INPUT_ISCD: string;

    /**
     * FID 입력 날짜1
     * 입력 날짜(ex. 20240223)
     */
    FID_INPUT_DATE_1: string;
}

export class InquireIndexDailyPriceOutput1 {
    /**
     * 업종 지수 현재가
     */
    bstp_nmix_prpr: string;

    /**
     * 업종 지수 전일 대비
     */
    bstp_nmix_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 업종 지수 전일 대비율
     */
    bstp_nmix_prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 업종 지수 시가2
     */
    bstp_nmix_oprc: string;

    /**
     * 업종 지수 최고가
     */
    bstp_nmix_hgpr: string;

    /**
     * 업종 지수 최저가
     */
    bstp_nmix_lwpr: string;

    /**
     * 전일 거래량
     */
    prdy_vol: string;

    /**
     * 상승 종목 수
     */
    ascn_issu_cnt: string;

    /**
     * 하락 종목 수
     */
    down_issu_cnt: string;

    /**
     * 보합 종목 수
     */
    stnr_issu_cnt: string;

    /**
     * 상한 종목 수
     */
    uplm_issu_cnt: string;

    /**
     * 하한 종목 수
     */
    lslm_issu_cnt: string;

    /**
     * 전일 거래 대금
     */
    prdy_tr_pbmn: string;

    /**
     * 연중업종지수최고가일자
     */
    dryy_bstp_nmix_hgpr_date: string;

    /**
     * 연중업종지수최고가
     */
    dryy_bstp_nmix_hgpr: string;

    /**
     * 연중업종지수최저가
     */
    dryy_bstp_nmix_lwpr: string;

    /**
     * 연중업종지수최저가일자
     */
    dryy_bstp_nmix_lwpr_date: string;
}

export class InquireIndexDailyPriceOutput2 {
    /**
     * 주식 영업 일자
     */
    stck_bsop_date: string;

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

    /**
     * 업종 지수 시가2
     */
    bstp_nmix_oprc: string;

    /**
     * 업종 지수 최고가
     */
    bstp_nmix_hgpr: string;

    /**
     * 업종 지수 최저가
     */
    bstp_nmix_lwpr: string;

    /**
     * 누적 거래량 비중
     */
    acml_vol_rlim: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 투자 신 심리도
     */
    invt_new_psdg: string;

    /**
     * 20일 이격도
     */
    d20_dsrt: string;
}

export interface SearchStockInfoParam {
    /**
     * 상품유형코드
     * 300: 주식, ETF, ETN, ELW
     * 301 : 선물옵션
     * 302 : 채권
     * 306 : ELS
     */
    PRDT_TYPE_CD: string;

    /**
     * 상품번호
     * 종목번호 (6자리)
     * ETN의 경우, Q로 시작 (EX. Q500001)
     */
    PDNO: string;
}

export class SearchStockInfoOutput {
    /**
     * 상품번호
     */
    pdno: string;

    /**
     * 상품유형코드
     */
    prdt_type_cd: string;

    /**
     * 시장ID코드
     * AGR.농축산물파생, BON.채권파생, CMD.일반상품시장 등
     */
    mket_id_cd: string;

    /**
     * 증권그룹ID코드
     * ST.주권, EF.ETF, EN.ETN 등
     */
    scty_grp_id_cd: string;

    /**
     * 거래소구분코드
     * 02.증권거래소, 03.코스닥 등
     */
    excg_dvsn_cd: string;

    /**
     * 결산월일
     */
    setl_mmdd: string;

    /**
     * 상장주수
     */
    lstg_stqt: string;

    /**
     * 상장자본금액
     */
    lstg_cptl_amt: string;

    /**
     * 자본금
     */
    cpta: string;

    /**
     * 액면가
     */
    papr: string;

    /**
     * 발행가격
     */
    issu_pric: string;

    /**
     * 코스피200종목여부
     */
    kospi200_item_yn: string;

    /**
     * 유가증권시장상장일자
     */
    scts_mket_lstg_dt: string;

    /**
     * 유가증권시장상장폐지일자
     */
    scts_mket_lstg_abol_dt: string;

    /**
     * 코스닥시장상장일자
     */
    kosdaq_mket_lstg_dt: string;

    /**
     * 코스닥시장상장폐지일자
     */
    kosdaq_mket_lstg_abol_dt: string;

    /**
     * 프리보드시장상장일자
     */
    frbd_mket_lstg_dt: string;

    /**
     * 프리보드시장상장폐지일자
     */
    frbd_mket_lstg_abol_dt: string;

    /**
     * 리츠종류코드
     */
    reits_kind_cd: string;

    /**
     * ETF구분코드
     */
    etf_dvsn_cd: string;

    /**
     * 유전펀드여부
     */
    oilf_fund_yn: string;

    /**
     * 지수업종대분류코드
     */
    idx_bztp_lcls_cd: string;

    /**
     * 지수업종중분류코드
     */
    idx_bztp_mcls_cd: string;

    /**
     * 지수업종소분류코드
     */
    idx_bztp_scls_cd: string;

    /**
     * 주식종류코드
     * 101.보통주, 201.우선주 등
     */
    stck_kind_cd: string;

    /**
     * 뮤추얼펀드개시일자
     */
    mfnd_opng_dt: string;

    /**
     * 뮤추얼펀드종료일자
     */
    mfnd_end_dt: string;

    /**
     * 예탁등록취소일자
     */
    dpsi_erlm_cncl_dt: string;

    /**
     * ETFCU수량
     */
    etf_cu_qty: string;

    /**
     * 상품명
     */
    prdt_name: string;

    /**
     * 상품명120
     */
    prdt_name120: string;

    /**
     * 상품약어명
     */
    prdt_abrv_name: string;

    /**
     * 표준상품번호
     */
    std_pdno: string;

    /**
     * 상품영문명
     */
    prdt_eng_name: string;

    /**
     * 상품영문명120
     */
    prdt_eng_name120: string;

    /**
     * 상품영문약어명
     */
    prdt_eng_abrv_name: string;

    /**
     * 예탁지정등록여부
     */
    dpsi_aptm_erlm_yn: string;

    /**
     * ETF과세유형코드
     */
    etf_txtn_type_cd: string;

    /**
     * ETF유형코드
     */
    etf_type_cd: string;

    /**
     * 상장폐지일자
     */
    lstg_abol_dt: string;

    /**
     * 신주구주구분코드
     */
    nwst_odst_dvsn_cd: string;

    /**
     * 대용가격
     */
    sbst_pric: string;

    /**
     * 당사대용가격
     */
    thco_sbst_pric: string;

    /**
     * 당사대용가격변경일자
     */
    thco_sbst_pric_chng_dt: string;

    /**
     * 거래정지여부
     */
    tr_stop_yn: string;

    /**
     * 관리종목여부
     */
    admn_item_yn: string;

    /**
     * 당일종가
     */
    thdt_clpr: string;

    /**
     * 전일종가
     */
    bfdy_clpr: string;

    /**
     * 종가변경일자
     */
    clpr_chng_dt: string;

    /**
     * 표준산업분류코드
     */
    std_idst_clsf_cd: string;

    /**
     * 표준산업분류코드명
     */
    std_idst_clsf_cd_name: string;

    /**
     * 지수업종대분류코드명
     */
    idx_bztp_lcls_cd_name: string;

    /**
     * 지수업종중분류코드명
     */
    idx_bztp_mcls_cd_name: string;

    /**
     * 지수업종소분류코드명
     */
    idx_bztp_scls_cd_name: string;

    /**
     * OCR번호
     */
    ocr_no: string;

    /**
     * 크라우드펀딩종목여부
     */
    crfd_item_yn: string;

    /**
     * 전자증권여부
     */
    elec_scty_yn: string;

    /**
     * 발행기관코드
     */
    issu_istt_cd: string;

    /**
     * ETF추적수익율배수
     */
    etf_chas_erng_rt_dbnb: string;

    /**
     * ETFETN투자유의종목여부
     */
    etf_etn_ivst_heed_item_yn: string;

    /**
     * 대주이자율구분코드
     */
    stln_int_rt_dvsn_cd: string;

    /**
     * 외국인개인한도비율
     */
    frnr_psnl_lmt_rt: string;

    /**
     * 상장신청인발행기관코드
     */
    lstg_rqsr_issu_istt_cd: string;

    /**
     * 상장신청인종목코드
     */
    lstg_rqsr_item_cd: string;

    /**
     * 신탁기관발행기관코드
     */
    trst_istt_issu_istt_cd: string;

    /**
     * NXT 거래종목여부
     */
    cptt_trad_tr_psbl_yn: string;

    /**
     * NXT 거래정지여부
     */
    nxt_tr_stop_yn: string;
}

export interface InquireIntstockMultpriceParam {
    /**
     * 조건 시장 분류 코드1
     * J: KRX, NX: NXT, UN: 통합 (ex. J)
     */
    FID_COND_MRKT_DIV_CODE_1: string;

    /**
     * 입력 종목코드1 (ex. 005930)
     */
    FID_INPUT_ISCD_1: string;

    /**
     * 조건 시장 분류 코드2
     */
    FID_COND_MRKT_DIV_CODE_2?: string;

    /**
     * 입력 종목코드2
     */
    FID_INPUT_ISCD_2?: string;

    /**
     * 조건 시장 분류 코드3
     */
    FID_COND_MRKT_DIV_CODE_3?: string;

    /**
     * 입력 종목코드3
     */
    FID_INPUT_ISCD_3?: string;

    /**
     * 조건 시장 분류 코드4
     */
    FID_COND_MRKT_DIV_CODE_4?: string;

    /**
     * 입력 종목코드4
     */
    FID_INPUT_ISCD_4?: string;

    /**
     * 조건 시장 분류 코드5
     */
    FID_COND_MRKT_DIV_CODE_5?: string;

    /**
     * 입력 종목코드5
     */
    FID_INPUT_ISCD_5?: string;

    /**
     * 조건 시장 분류 코드6
     */
    FID_COND_MRKT_DIV_CODE_6?: string;

    /**
     * 입력 종목코드6
     */
    FID_INPUT_ISCD_6?: string;

    /**
     * 조건 시장 분류 코드7
     */
    FID_COND_MRKT_DIV_CODE_7?: string;

    /**
     * 입력 종목코드7
     */
    FID_INPUT_ISCD_7?: string;

    /**
     * 조건 시장 분류 코드8
     */
    FID_COND_MRKT_DIV_CODE_8?: string;

    /**
     * 입력 종목코드8
     */
    FID_INPUT_ISCD_8?: string;

    /**
     * 조건 시장 분류 코드9
     */
    FID_COND_MRKT_DIV_CODE_9?: string;

    /**
     * 입력 종목코드9
     */
    FID_INPUT_ISCD_9?: string;

    /**
     * 조건 시장 분류 코드10
     */
    FID_COND_MRKT_DIV_CODE_10?: string;

    /**
     * 입력 종목코드10
     */
    FID_INPUT_ISCD_10?: string;

    /**
     * 조건 시장 분류 코드11
     */
    FID_COND_MRKT_DIV_CODE_11?: string;

    /**
     * 입력 종목코드11
     */
    FID_INPUT_ISCD_11?: string;

    /**
     * 조건 시장 분류 코드12
     */
    FID_COND_MRKT_DIV_CODE_12?: string;

    /**
     * 입력 종목코드12
     */
    FID_INPUT_ISCD_12?: string;

    /**
     * 조건 시장 분류 코드13
     */
    FID_COND_MRKT_DIV_CODE_13?: string;

    /**
     * 입력 종목코드13
     */
    FID_INPUT_ISCD_13?: string;

    /**
     * 조건 시장 분류 코드14
     */
    FID_COND_MRKT_DIV_CODE_14?: string;

    /**
     * 입력 종목코드14
     */
    FID_INPUT_ISCD_14?: string;

    /**
     * 조건 시장 분류 코드15
     */
    FID_COND_MRKT_DIV_CODE_15?: string;

    /**
     * 입력 종목코드15
     */
    FID_INPUT_ISCD_15?: string;

    /**
     * 조건 시장 분류 코드16
     */
    FID_COND_MRKT_DIV_CODE_16?: string;

    /**
     * 입력 종목코드16
     */
    FID_INPUT_ISCD_16?: string;

    /**
     * 조건 시장 분류 코드17
     */
    FID_COND_MRKT_DIV_CODE_17?: string;

    /**
     * 입력 종목코드17
     */
    FID_INPUT_ISCD_17?: string;

    /**
     * 조건 시장 분류 코드18
     */
    FID_COND_MRKT_DIV_CODE_18?: string;

    /**
     * 입력 종목코드18
     */
    FID_INPUT_ISCD_18?: string;

    /**
     * 조건 시장 분류 코드19
     */
    FID_COND_MRKT_DIV_CODE_19?: string;

    /**
     * 입력 종목코드19
     */
    FID_INPUT_ISCD_19?: string;

    /**
     * 조건 시장 분류 코드20
     */
    FID_COND_MRKT_DIV_CODE_20?: string;

    /**
     * 입력 종목코드20
     */
    FID_INPUT_ISCD_20?: string;

    /**
     * 조건 시장 분류 코드21
     */
    FID_COND_MRKT_DIV_CODE_21?: string;

    /**
     * 입력 종목코드21
     */
    FID_INPUT_ISCD_21?: string;

    /**
     * 조건 시장 분류 코드22
     */
    FID_COND_MRKT_DIV_CODE_22?: string;

    /**
     * 입력 종목코드22
     */
    FID_INPUT_ISCD_22?: string;

    /**
     * 조건 시장 분류 코드23
     */
    FID_COND_MRKT_DIV_CODE_23?: string;

    /**
     * 입력 종목코드23
     */
    FID_INPUT_ISCD_23?: string;

    /**
     * 조건 시장 분류 코드24
     */
    FID_COND_MRKT_DIV_CODE_24?: string;

    /**
     * 입력 종목코드24
     */
    FID_INPUT_ISCD_24?: string;

    /**
     * 조건 시장 분류 코드25
     */
    FID_COND_MRKT_DIV_CODE_25?: string;

    /**
     * 입력 종목코드25
     */
    FID_INPUT_ISCD_25?: string;

    /**
     * 조건 시장 분류 코드26
     */
    FID_COND_MRKT_DIV_CODE_26?: string;

    /**
     * 입력 종목코드26
     */
    FID_INPUT_ISCD_26?: string;

    /**
     * 조건 시장 분류 코드27
     */
    FID_COND_MRKT_DIV_CODE_27?: string;

    /**
     * 입력 종목코드27
     */
    FID_INPUT_ISCD_27?: string;

    /**
     * 조건 시장 분류 코드28
     */
    FID_COND_MRKT_DIV_CODE_28?: string;

    /**
     * 입력 종목코드28
     */
    FID_INPUT_ISCD_28?: string;

    /**
     * 조건 시장 분류 코드29
     */
    FID_COND_MRKT_DIV_CODE_29?: string;

    /**
     * 입력 종목코드29
     */
    FID_INPUT_ISCD_29?: string;

    /**
     * 조건 시장 분류 코드30
     */
    FID_COND_MRKT_DIV_CODE_30?: string;

    /**
     * 입력 종목코드30
     */
    FID_INPUT_ISCD_30?: string;
}

export class InquireIntstockMultpriceOutput {
    /**
     * 코스피 코스닥 구분 명
     */
    kospi_kosdaq_cls_name: string;

    /**
     * 시장 조치 구분 명
     */
    mrkt_trtm_cls_name: string;

    /**
     * 시간 구분 코드
     */
    hour_cls_code: string;

    /**
     * 관심 단축 종목코드
     */
    inter_shrn_iscd: string;

    /**
     * 관심 한글 종목명
     */
    inter_kor_isnm: string;

    /**
     * 관심2 현재가
     */
    inter2_prpr: string;

    /**
     * 관심2 전일 대비
     */
    inter2_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 관심2 시가
     */
    inter2_oprc: string;

    /**
     * 관심2 고가
     */
    inter2_hgpr: string;

    /**
     * 관심2 저가
     */
    inter2_lwpr: string;

    /**
     * 관심2 하한가
     */
    inter2_llam: string;

    /**
     * 관심2 상한가
     */
    inter2_mxpr: string;

    /**
     * 관심2 매도호가
     */
    inter2_askp: string;

    /**
     * 관심2 매수호가
     */
    inter2_bidp: string;

    /**
     * 매도 잔량
     */
    seln_rsqn: string;

    /**
     * 매수2 잔량
     */
    shnu_rsqn: string;

    /**
     * 총 매도호가 잔량
     */
    total_askp_rsqn: string;

    /**
     * 총 매수호가 잔량
     */
    total_bidp_rsqn: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 관심2 전일 종가
     */
    inter2_prdy_clpr: string;

    /**
     * 시가 대비 최고가 비율
     */
    oprc_vrss_hgpr_rate: string;

    /**
     * 관심 예상 체결 대비
     */
    intr_antc_cntg_vrss: string;

    /**
     * 관심 예상 체결 대비 부호
     */
    intr_antc_cntg_vrss_sign: string;

    /**
     * 관심 예상 체결 전일 대비율
     */
    intr_antc_cntg_prdy_ctrt: string;

    /**
     * 관심 예상 거래량
     */
    intr_antc_vol: string;

    /**
     * 관심2 기준가
     */
    inter2_sdpr: string;
}

export interface DomesticStockInvestorTradeByStockDailyParam {
    /**
     * 조건 시장 분류 코드
     * J:KRX, NX:NXT, UN:통합
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * 입력 종목코드
     * 종목번호 (6자리)
     */
    FID_INPUT_ISCD: string;

    /**
     * 입력 날짜1
     * 입력 날짜(예: 20250812) (해당일 조회는 장 종료 후 정상 조회 가능)
     */
    FID_INPUT_DATE_1: string;

    /**
     * 수정주가 원주가 가격
     * 공란 입력
     */
    FID_ORG_ADJ_PRC: string;

    /**
     * 기타 구분 코드
     * 공란 입력
     */
    FID_ETC_CLS_CODE: string;
}

export class DomesticStockInvestorTradeByStockDailyOutput1 {
    /**
     * 주식 현재가
     */
    stck_prpr: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 전일 거래량
     */
    prdy_vol: string;

    /**
     * 대표 시장 한글 명
     */
    rprs_mrkt_kor_name: string;
}

export class DomesticStockInvestorTradeByStockDailyOutput2 {
    /**
     * 주식 영업 일자
     */
    stck_bsop_date: string;

    /**
     * 주식 종가
     */
    stck_clpr: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량 (단위: 주)
     */
    acml_vol: string;

    /**
     * 누적 거래 대금 (단위: 백만원)
     */
    acml_tr_pbmn: string;

    /**
     * 주식 시가2
     */
    stck_oprc: string;

    /**
     * 주식 최고가
     */
    stck_hgpr: string;

    /**
     * 주식 최저가
     */
    stck_lwpr: string;

    /**
     * 외국인 순매수 수량 (단위: 주)
     */
    frgn_ntby_qty: string;

    /**
     * 외국인 등록 순매수 수량
     */
    frgn_reg_ntby_qty: string;

    /**
     * 외국인 비등록 순매수 수량
     */
    frgn_nreg_ntby_qty: string;

    /**
     * 개인 순매수 수량
     */
    prsn_ntby_qty: string;

    /**
     * 기관계 순매수 수량
     */
    orgn_ntby_qty: string;

    /**
     * 증권 순매수 수량
     */
    scrt_ntby_qty: string;

    /**
     * 투자신탁 순매수 수량
     */
    ivtr_ntby_qty: string;

    /**
     * 사모 펀드 순매수 거래량
     */
    pe_fund_ntby_vol: string;

    /**
     * 은행 순매수 수량
     */
    bank_ntby_qty: string;

    /**
     * 보험 순매수 수량
     */
    insu_ntby_qty: string;

    /**
     * 종금 순매수 수량
     */
    mrbn_ntby_qty: string;

    /**
     * 기금 순매수 수량
     */
    fund_ntby_qty: string;

    /**
     * 기타 순매수 수량
     */
    etc_ntby_qty: string;

    /**
     * 기타 법인 순매수 거래량
     */
    etc_corp_ntby_vol: string;

    /**
     * 기타 단체 순매수 거래량
     */
    etc_orgt_ntby_vol: string;

    /**
     * 외국인 등록 순매수 대금 (단위: 백만원)
     */
    frgn_reg_ntby_pbmn: string;

    /**
     * 외국인 순매수 거래 대금
     */
    frgn_ntby_tr_pbmn: string;

    /**
     * 외국인 비등록 순매수 대금
     */
    frgn_nreg_ntby_pbmn: string;

    /**
     * 개인 순매수 거래 대금
     */
    prsn_ntby_tr_pbmn: string;

    /**
     * 기관계 순매수 거래 대금
     */
    orgn_ntby_tr_pbmn: string;

    /**
     * 증권 순매수 거래 대금
     */
    scrt_ntby_tr_pbmn: string;

    /**
     * 사모 펀드 순매수 거래 대금
     */
    pe_fund_ntby_tr_pbmn: string;

    /**
     * 투자신탁 순매수 거래 대금
     */
    ivtr_ntby_tr_pbmn: string;

    /**
     * 은행 순매수 거래 대금
     */
    bank_ntby_tr_pbmn: string;

    /**
     * 보험 순매수 거래 대금
     */
    insu_ntby_tr_pbmn: string;

    /**
     * 종금 순매수 거래 대금
     */
    mrbn_ntby_tr_pbmn: string;

    /**
     * 기금 순매수 거래 대금
     */
    fund_ntby_tr_pbmn: string;

    /**
     * 기타 순매수 거래 대금
     */
    etc_ntby_tr_pbmn: string;

    /**
     * 기타 법인 순매수 거래 대금
     */
    etc_corp_ntby_tr_pbmn: string;

    /**
     * 기타 단체 순매수 거래 대금
     */
    etc_orgt_ntby_tr_pbmn: string;

    /**
     * 외국인 매도 거래량
     */
    frgn_seln_vol: string;

    /**
     * 외국인 매수2 거래량
     */
    frgn_shnu_vol: string;

    /**
     * 외국인 매도 거래 대금
     */
    frgn_seln_tr_pbmn: string;

    /**
     * 외국인 매수2 거래 대금
     */
    frgn_shnu_tr_pbmn: string;

    /**
     * 외국인 등록 매도 수량
     */
    frgn_reg_askp_qty: string;

    /**
     * 외국인 등록 매수 수량
     */
    frgn_reg_bidp_qty: string;

    /**
     * 외국인 등록 매도 대금
     */
    frgn_reg_askp_pbmn: string;

    /**
     * 외국인 등록 매수 대금
     */
    frgn_reg_bidp_pbmn: string;

    /**
     * 외국인 비등록 매도 수량
     */
    frgn_nreg_askp_qty: string;

    /**
     * 외국인 비등록 매수 수량
     */
    frgn_nreg_bidp_qty: string;

    /**
     * 외국인 비등록 매도 대금
     */
    frgn_nreg_askp_pbmn: string;

    /**
     * 외국인 비등록 매수 대금
     */
    frgn_nreg_bidp_pbmn: string;

    /**
     * 개인 매도 거래량
     */
    prsn_seln_vol: string;

    /**
     * 개인 매수2 거래량
     */
    prsn_shnu_vol: string;

    /**
     * 개인 매도 거래 대금
     */
    prsn_seln_tr_pbmn: string;

    /**
     * 개인 매수2 거래 대금
     */
    prsn_shnu_tr_pbmn: string;

    /**
     * 기관계 매도 거래량
     */
    orgn_seln_vol: string;

    /**
     * 기관계 매수2 거래량
     */
    orgn_shnu_vol: string;

    /**
     * 기관계 매도 거래 대금
     */
    orgn_seln_tr_pbmn: string;

    /**
     * 기관계 매수2 거래 대금
     */
    orgn_shnu_tr_pbmn: string;

    /**
     * 증권 매도 거래량
     */
    scrt_seln_vol: string;

    /**
     * 증권 매수2 거래량
     */
    scrt_shnu_vol: string;

    /**
     * 증권 매도 거래 대금
     */
    scrt_seln_tr_pbmn: string;

    /**
     * 증권 매수2 거래 대금
     */
    scrt_shnu_tr_pbmn: string;

    /**
     * 투자신탁 매도 거래량
     */
    ivtr_seln_vol: string;

    /**
     * 투자신탁 매수2 거래량
     */
    ivtr_shnu_vol: string;

    /**
     * 투자신탁 매도 거래 대금
     */
    ivtr_seln_tr_pbmn: string;

    /**
     * 투자신탁 매수2 거래 대금
     */
    ivtr_shnu_tr_pbmn: string;

    /**
     * 사모 펀드 매도 거래 대금
     */
    pe_fund_seln_tr_pbmn: string;

    /**
     * 사모 펀드 매도 거래량
     */
    pe_fund_seln_vol: string;

    /**
     * 사모 펀드 매수2 거래 대금
     */
    pe_fund_shnu_tr_pbmn: string;

    /**
     * 사모 펀드 매수2 거래량
     */
    pe_fund_shnu_vol: string;

    /**
     * 은행 매도 거래량
     */
    bank_seln_vol: string;

    /**
     * 은행 매수2 거래량
     */
    bank_shnu_vol: string;

    /**
     * 은행 매도 거래 대금
     */
    bank_seln_tr_pbmn: string;

    /**
     * 은행 매수2 거래 대금
     */
    bank_shnu_tr_pbmn: string;

    /**
     * 보험 매도 거래량
     */
    insu_seln_vol: string;

    /**
     * 보험 매수2 거래량
     */
    insu_shnu_vol: string;

    /**
     * 보험 매도 거래 대금
     */
    insu_seln_tr_pbmn: string;

    /**
     * 보험 매수2 거래 대금
     */
    insu_shnu_tr_pbmn: string;

    /**
     * 종금 매도 거래량
     */
    mrbn_seln_vol: string;

    /**
     * 종금 매수2 거래량
     */
    mrbn_shnu_vol: string;

    /**
     * 종금 매도 거래 대금
     */
    mrbn_seln_tr_pbmn: string;

    /**
     * 종금 매수2 거래 대금
     */
    mrbn_shnu_tr_pbmn: string;

    /**
     * 기금 매도 거래량
     */
    fund_seln_vol: string;

    /**
     * 기금 매수2 거래량
     */
    fund_shnu_vol: string;

    /**
     * 기금 매도 거래 대금
     */
    fund_seln_tr_pbmn: string;

    /**
     * 기금 매수2 거래 대금
     */
    fund_shnu_tr_pbmn: string;

    /**
     * 기타 매도 거래량
     */
    etc_seln_vol: string;

    /**
     * 기타 매수2 거래량
     */
    etc_shnu_vol: string;

    /**
     * 기타 매도 거래 대금
     */
    etc_seln_tr_pbmn: string;

    /**
     * 기타 매수2 거래 대금
     */
    etc_shnu_tr_pbmn: string;

    /**
     * 기타 단체 매도 거래량
     */
    etc_orgt_seln_vol: string;

    /**
     * 기타 단체 매수2 거래량
     */
    etc_orgt_shnu_vol: string;

    /**
     * 기타 단체 매도 거래 대금
     */
    etc_orgt_seln_tr_pbmn: string;

    /**
     * 기타 단체 매수2 거래 대금
     */
    etc_orgt_shnu_tr_pbmn: string;

    /**
     * 기타 법인 매도 거래량
     */
    etc_corp_seln_vol: string;

    /**
     * 기타 법인 매수2 거래량
     */
    etc_corp_shnu_vol: string;

    /**
     * 기타 법인 매도 거래 대금
     */
    etc_corp_seln_tr_pbmn: string;

    /**
     * 기타 법인 매수2 거래 대금
     */
    etc_corp_shnu_tr_pbmn: string;

    /**
     * BOLD 여부
     */
    bold_yn: string;
}

export interface DomesticStockInvestorDailyByMarketParam {
    /**
     * 조건 시장 분류 코드
     * 시장구분코드 (업종 U)
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * 입력 종목코드
     * 코스피, 코스닥 : 업종분류코드 (종목정보파일 - 업종코드 참조)
     */
    FID_INPUT_ISCD: string;

    /**
     * 입력 날짜1
     * ex. 20240517
     */
    FID_INPUT_DATE_1: string;

    /**
     * 입력 종목코드
     * 코스피(KSP), 코스닥(KSQ)
     */
    FID_INPUT_ISCD_1: string;

    /**
     * 입력 날짜2
     * 입력 날짜1과 동일날짜 입력
     */
    FID_INPUT_DATE_2: string;

    /**
     * 하위 분류코드
     * 코스피, 코스닥 : 업종분류코드 (종목정보파일 - 업종코드 참조)
     */
    FID_INPUT_ISCD_2: string;
}

export class DomesticStockInvestorDailyByMarketOutput {
    /**
     * 주식 영업 일자
     */
    stck_bsop_date: string;

    /**
     * 업종 지수 현재가
     */
    bstp_nmix_prpr: string;

    /**
     * 업종 지수 전일 대비
     */
    bstp_nmix_prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 업종 지수 전일 대비율
     */
    bstp_nmix_prdy_ctrt: string;

    /**
     * 업종 지수 시가2
     */
    bstp_nmix_oprc: string;

    /**
     * 업종 지수 최고가
     */
    bstp_nmix_hgpr: string;

    /**
     * 업종 지수 최저가
     */
    bstp_nmix_lwpr: string;

    /**
     * 주식 전일 종가
     */
    stck_prdy_clpr: string;

    /**
     * 외국인 순매수 수량
     */
    frgn_ntby_qty: string;

    /**
     * 외국인 등록 순매수 수량
     */
    frgn_reg_ntby_qty: string;

    /**
     * 외국인 비등록 순매수 수량
     */
    frgn_nreg_ntby_qty: string;

    /**
     * 개인 순매수 수량
     */
    prsn_ntby_qty: string;

    /**
     * 기관계 순매수 수량
     */
    orgn_ntby_qty: string;

    /**
     * 증권 순매수 수량
     */
    scrt_ntby_qty: string;

    /**
     * 투자신탁 순매수 수량
     */
    ivtr_ntby_qty: string;

    /**
     * 사모 펀드 순매수 거래량
     */
    pe_fund_ntby_vol: string;

    /**
     * 은행 순매수 수량
     */
    bank_ntby_qty: string;

    /**
     * 보험 순매수 수량
     */
    insu_ntby_qty: string;

    /**
     * 종금 순매수 수량
     */
    mrbn_ntby_qty: string;

    /**
     * 기금 순매수 수량
     */
    fund_ntby_qty: string;

    /**
     * 기타 순매수 수량
     */
    etc_ntby_qty: string;

    /**
     * 기타 단체 순매수 거래량
     */
    etc_orgt_ntby_vol: string;

    /**
     * 기타 법인 순매수 거래량
     */
    etc_corp_ntby_vol: string;

    /**
     * 외국인 순매수 거래 대금
     */
    frgn_ntby_tr_pbmn: string;

    /**
     * 외국인 등록 순매수 대금
     */
    frgn_reg_ntby_pbmn: string;

    /**
     * 외국인 비등록 순매수 대금
     */
    frgn_nreg_ntby_pbmn: string;

    /**
     * 개인 순매수 거래 대금
     */
    prsn_ntby_tr_pbmn: string;

    /**
     * 기관계 순매수 거래 대금
     */
    orgn_ntby_tr_pbmn: string;

    /**
     * 증권 순매수 거래 대금
     */
    scrt_ntby_tr_pbmn: string;

    /**
     * 투자신탁 순매수 거래 대금
     */
    ivtr_ntby_tr_pbmn: string;

    /**
     * 사모 펀드 순매수 거래 대금
     */
    pe_fund_ntby_tr_pbmn: string;

    /**
     * 은행 순매수 거래 대금
     */
    bank_ntby_tr_pbmn: string;

    /**
     * 보험 순매수 거래 대금
     */
    insu_ntby_tr_pbmn: string;

    /**
     * 종금 순매수 거래 대금
     */
    mrbn_ntby_tr_pbmn: string;

    /**
     * 기금 순매수 거래 대금
     */
    fund_ntby_tr_pbmn: string;

    /**
     * 기타 순매수 거래 대금
     */
    etc_ntby_tr_pbmn: string;

    /**
     * 기타 단체 순매수 거래 대금
     */
    etc_orgt_ntby_tr_pbmn: string;

    /**
     * 기타 법인 순매수 거래 대금
     */
    etc_corp_ntby_tr_pbmn: string;
}

export interface DomesticStockDailyCreditBalanceParam {
    /**
     * 시장 분류 코드
     * 시장구분코드 (주식 J)
     */
    fid_cond_mrkt_div_code: string;

    /**
     * 화면 분류 코드
     * Unique key(20476)
     */
    fid_cond_scr_div_code: string;

    /**
     * 종목코드
     * 종목코드 (ex 005930)
     */
    fid_input_iscd: string;

    /**
     * 결제일자
     * 결제일자 (ex 20240313)
     */
    fid_input_date_1: string;
}

export class DomesticStockDailyCreditBalanceOutput {
    /**
     * 매매 일자
     */
    deal_date: string;

    /**
     * 주식 현재가
     */
    stck_prpr: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 결제 일자
     */
    stlm_date: string;

    /**
     * 전체 융자 신규 주수 (단위: 주)
     */
    whol_loan_new_stcn: string;

    /**
     * 전체 융자 상환 주수 (단위: 주)
     */
    whol_loan_rdmp_stcn: string;

    /**
     * 전체 융자 잔고 주수 (단위: 주)
     */
    whol_loan_rmnd_stcn: string;

    /**
     * 전체 융자 신규 금액 (단위: 만원)
     */
    whol_loan_new_amt: string;

    /**
     * 전체 융자 상환 금액 (단위: 만원)
     */
    whol_loan_rdmp_amt: string;

    /**
     * 전체 융자 잔고 금액 (단위: 만원)
     */
    whol_loan_rmnd_amt: string;

    /**
     * 전체 융자 잔고 비율
     */
    whol_loan_rmnd_rate: string;

    /**
     * 전체 융자 공여율
     */
    whol_loan_gvrt: string;

    /**
     * 전체 대주 신규 주수 (단위: 주)
     */
    whol_stln_new_stcn: string;

    /**
     * 전체 대주 상환 주수 (단위: 주)
     */
    whol_stln_rdmp_stcn: string;

    /**
     * 전체 대주 잔고 주수 (단위: 주)
     */
    whol_stln_rmnd_stcn: string;

    /**
     * 전체 대주 신규 금액 (단위: 만원)
     */
    whol_stln_new_amt: string;

    /**
     * 전체 대주 상환 금액 (단위: 만원)
     */
    whol_stln_rdmp_amt: string;

    /**
     * 전체 대주 잔고 금액 (단위: 만원)
     */
    whol_stln_rmnd_amt: string;

    /**
     * 전체 대주 잔고 비율
     */
    whol_stln_rmnd_rate: string;

    /**
     * 전체 대주 공여율
     */
    whol_stln_gvrt: string;

    /**
     * 주식 시가2
     */
    stck_oprc: string;

    /**
     * 주식 최고가
     */
    stck_hgpr: string;

    /**
     * 주식 최저가
     */
    stck_lwpr: string;
}

export interface DomesticStockDailyShortSaleParam {
    /**
     * 조건 시장 분류 코드
     * 시장구분코드 (주식 J)
     */
    FID_COND_MRKT_DIV_CODE: string;

    /**
     * 입력 종목코드
     * 종목코드
     */
    FID_INPUT_ISCD: string;

    /**
     * 입력 날짜1
     * 공백시 전체 (기간 ~)
     */
    FID_INPUT_DATE_1: string;

    /**
     * 입력 날짜2
     * ~ 누적
     */
    FID_INPUT_DATE_2: string;
}

export class DomesticStockDailyShortSaleOutput1 {
    /**
     * 주식 현재가
     */
    stck_prpr: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 전일 거래량
     */
    prdy_vol: string;
}

export class DomesticStockDailyShortSaleOutput2 {
    /**
     * 주식 영업 일자
     */
    stck_bsop_date: string;

    /**
     * 주식 종가
     */
    stck_clpr: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 기준 거래량 합계
     */
    stnd_vol_smtn: string;

    /**
     * 공매도 체결 수량
     */
    ssts_cntg_qty: string;

    /**
     * 공매도 거래량 비중
     */
    ssts_vol_rlim: string;

    /**
     * 누적 공매도 체결 수량
     */
    acml_ssts_cntg_qty: string;

    /**
     * 누적 공매도 체결 수량 비중
     */
    acml_ssts_cntg_qty_rlim: string;

    /**
     * 누적 거래 대금
     */
    acml_tr_pbmn: string;

    /**
     * 기준 거래대금 합계
     */
    stnd_tr_pbmn_smtn: string;

    /**
     * 공매도 거래 대금
     */
    ssts_tr_pbmn: string;

    /**
     * 공매도 거래대금 비중
     */
    ssts_tr_pbmn_rlim: string;

    /**
     * 누적 공매도 거래 대금
     */
    acml_ssts_tr_pbmn: string;

    /**
     * 누적 공매도 거래 대금 비중
     */
    acml_ssts_tr_pbmn_rlim: string;

    /**
     * 주식 시가2
     */
    stck_oprc: string;

    /**
     * 주식 최고가
     */
    stck_hgpr: string;

    /**
     * 주식 최저가
     */
    stck_lwpr: string;

    /**
     * 평균가격
     */
    avrg_prc: string;
}

export interface DomesticStockDailyLoanTransParam {
    /**
     * 조회구분
     * 1(코스피), 2(코스닥), 3(종목)
     */
    MRKT_DIV_CLS_CODE: string;

    /**
     * 종목코드
     * 종목코드
     */
    MKSC_SHRN_ISCD: string;

    /**
     * 조회시작일시
     * 조회기간 ~
     */
    START_DATE: string;

    /**
     * 조회종료일시
     * ~ 조회기간
     */
    END_DATE: string;

    /**
     * 이전조회KEY
     * 공백
     */
    CTS: string;
}

export class DomesticStockDailyLoanTransOutput1 {
    /**
     * 일자
     */
    bsop_date: string;

    /**
     * 주식 종가
     */
    stck_prpr: string;

    /**
     * 전일 대비 부호
     */
    prdy_vrss_sign: string;

    /**
     * 전일 대비
     */
    prdy_vrss: string;

    /**
     * 전일 대비율
     */
    prdy_ctrt: string;

    /**
     * 누적 거래량
     */
    acml_vol: string;

    /**
     * 당일 증가 주수 (체결)
     */
    new_stcn: string;

    /**
     * 당일 감소 주수 (상환)
     */
    rdmp_stcn: string;

    /**
     * 대차거래 증감
     */
    prdy_rmnd_vrss: string;

    /**
     * 당일 잔고 주수
     */
    rmnd_stcn: string;

    /**
     * 당일 잔고 금액
     */
    rmnd_amt: string;
}
