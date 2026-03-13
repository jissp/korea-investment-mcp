# Korea Investment MCP Server (한국투자증권 MCP 서버)

이 프로젝트는 한국투자증권 OpenAPI를 활용하여 주식 및 파생상품 정보를 제공하는 MCP(Model Context Protocol) 서버입니다.

직접 만든 [@jissp/nestjs-mcp-server](https://www.npmjs.com/package/@jissp/nestjs-mcp-server) 를 사용하였고, AI 모델이 한국투자증권의 실시간 주가 조회, 순위 분석, 투자자 매매 동향 등의 데이터를 직접 활용할 수 있게 합니다.

## 주요 특징

- **NestJS 기반**: 확장 가능하고 유지보수가 용이한 아키텍처
- **@jissp/nestjs-mcp-server**: 직접 만든 NestJS MCP 라이브러리 사용
- **SSE(Server-Sent Events) 지원**: 실시간 데이터 전송 최적화
- **다양한 금융 데이터**: 주식, 선물, 옵션, 투자자 동향 등 포괄적인 API 제공

## 사전 준비 (Prerequisites)

1. **한국투자증권 API 계정**: [한국투자증권 API 포털](https://apiportal.koreainvestment.com/)에서 앱 키(App Key)와 앱 시크릿(App Secret)을 발급받아야 합니다.
2. **Node.js**: v18 이상의 Node.js가 설치되어 있어야 합니다.

## 설치 및 설정

### 1. 프로젝트 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하거나, 시스템 환경 변수로 다음 값을 설정합니다.

```env
KOREA_INVESTMENT_HOST=https://openapi.koreainvestment.com:9443
KOREA_INVESTMENT_APP_KEY=여러분의_APP_KEY
KOREA_INVESTMENT_APP_SECRET=여러분의_APP_SECRET
KOREA_INVESTMENT_USER_ID=여러분의_HTS_ID
```

### 3. 프로젝트 빌드 및 실행

```bash
# 빌드
npm run build

# 서버 실행
npm run start:prod
```

---

## Claude Code에 설정하는 방법

이 서버는 **SSE(Server-Sent Events)** 방식을 통해 MCP 프로토콜을 지원합니다. Claude Code(CLI)에서 이 서버를 사용하려면 서버를 먼저 실행한 후 설정을 추가해야 합니다.

### 1. 서버 실행

터미널 또는 Docker 컨테이너를 시작하여 서버를 실행합니다.

```bash
npm run start:prod
```

또는

```bash
docker compose up -d
```

서버는 기본적으로 `http://localhost:3000`에서 동작하며, MCP 엔드포인트는 `http://localhost:3000/mcp`입니다.

### 2. Claude Code에 MCP 추가

새 터미널 창을 열고 Claude Code 설정 파일(`~/.claude/settings.local.json`)에 다음 내용을 추가하거나, `claude mcp add` 기능을 사용합니다.

**방법 A: 설정 파일 직접 수정**
`~/.claude/settings.local.json` (또는 프로젝트의 `.claude/settings.local.json`) 파일을 열고 다음을 추가합니다:

```json
{
  "mcpServers": {
    "korea-investment": {
      "url": "http://localhost:3000/mcp"
    }
  }
}
```

**방법 B: Claude Desktop 설정 (MacOS/Windows)**
Claude Desktop 사용자의 경우, `claude_desktop_config.json` 파일에 추가합니다.

```json
{
  "mcpServers": {
    "korea-investment": {
      "url": "http://localhost:3000/mcp"
    }
  }
}
```

---

## 데이터 관리 (코드 파일 업데이트)

주식 종목 코드나 업종 코드 등의 마스터 파일을 최신 상태로 유지하려면 다음 명령어를 실행합니다.

```bash
npm run update-mst
```

이 명령어는 한국투자증권 서버에서 최신 마스터 파일을 다운로드하여 `src/common/assets/*.json` 파일들을 갱신합니다.

---

## 사용 방법

### 종목 정보 조회

❯ 삼성전자 종목에 대한 정보 조회해줘.

```text                                                                                                                                                                                                                                                    
⏺ KoreaInvestmentMcp - search-stock-info (MCP)(PDNO: "005930", PRDT_TYPE_CD: "300")                                                                                                                                                                                
  ⎿  {                                                                                                                                                                                                                                                             
       "output": {                                                                                                                                                                                                                                                 
         "pdno": "00000A005930",                                                                                                                                                                                                                                   
     … +71 lines (ctrl+o to expand)                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                   
⏺ 삼성전자 종목 정보를 조회했습니다.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                   
  주요 정보                                                                                                                                                                                                                                                        
   
  기본 정보                                                                                                                                                                                                                                                        
  - 종목명: 삼성전자                                                                                                                                                                                                                                               
  - 영문명: Samsung Electronics                                                                                                                                                                                                                                    
  - 종목코드: 005930 (KR7005930003)                                                                                                                                                                                                                                
  - 종목구분: 주식(보통주)                                                                                                                                                                                                                                         

  시가총액 규모
  - 상장주식수: 5,919,637,922주
  - 시가총액: 778,046,685,000,000원 (약 778조)
  - 액면가: 100원

  현재 주가
  - 현재가: 190,000원
  - 기준일: 2026년 3월 11일

  산업 분류
  - 표준산업분류: 통신 및 방송 장비 제조업
  - 지수분류:
    - 시가총액 규모: 대형주
    - 산업: 전기, 전자

  거래 정보
  - 거래 중지 여부: 거래 가능
  - 행정 조치: 없음
  - 전자증권: 적용됨

  기타
  - 상장일: 1975년 6월 11일
  - KOSPI200 구성 여부: 포함
  - 대차거래 가능: 가능

  삼성전자는 한국 주식시장의 최대 규모 우량주이며, 현재 190,000원에 거래되고 있습니다.
```

---

## 주요 기능 (Tools)

이 서버는 다음과 같은 도구(Tools)를 AI 모델에게 제공합니다.

### 1. 주식 및 지수 조회

- `inquire-index-price`: 국내 업종별 지수의 현재가를 조회합니다.
- `inquire-index-daily-price`: 업종별 일자별 시세를 조회합니다.
- `search-stock-info`: 주식의 기본 정보를 조회합니다 (상품유형, 종목코드 등).
- `intstock-multi-price`: 여러 관심 종목의 현재가를 한 번에 조회합니다.

### 2. 투자자 매매 동향 및 시장 분석

- `investor-trade-by-stock-daily`: 특정 종목의 일별 투자자 매매 추이를 분석합니다.
- `investor-daily-by-market`: 시장별(코스피/코스닥 등) 투자자 매매 동향을 조회합니다.
- `hts-top-view`: HTS 화면별 인기 조회 종목 순위를 제공합니다.

### 3. 통계 및 순위

- `volume-rank`: 거래량 기준 종목 순위를 조회합니다.
- `fluctuation-rank`: 등락률 기준 종목 순위를 조회합니다.
- `credit-balance-rank`: 신용융자 잔고 상위 종목을 조회합니다.
- `short-sale-rank`: 공매도 잔고 상위 종목을 조회합니다.

### 4. 기타 현황

- `daily-credit-balance`: 일별 신용융자 잔고 추이를 조회합니다.
- `daily-short-sale`: 일별 공매도 거래 현황을 조회합니다.
- `daily-loan-trans`: 일별 대차거래 현황을 조회합니다.

### 5. 파생상품

- `future-option-price`: 선물/옵션 현재가 시세를 조회합니다.
- `future-option-period-price`: 선물/옵션의 기간별 시세를 조회합니다.
