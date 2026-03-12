import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import AdmZip from 'adm-zip';

const DOWNLOAD_FILES = [
    'idxcode.mst.zip',
    'kospi_code.mst.zip',
    'kosdaq_code.mst.zip',
    'nxt_kospi_code.mst.zip',
    'nxt_kosdaq_code.mst.zip',
    'theme_code.mst.zip',
    'nasmst.cod.zip',
    'nysmst.cod.zip',
    'amsmst.cod.zip',
    'fo_idx_code_mts.mst.zip',
    'fo_com_code.mst.zip',
];

class StockDownloader {
    private readonly tempDir = path.join(__dirname, '../temp');

    constructor() {}

    /**
     * 파일을 저장합니다.
     * @param fileName
     */
    public async download(fileName: string) {
        const zipPath = this.getZipPath(fileName);

        const response = await axios.get(
            `https://new.real.download.dws.co.kr/common/master/${fileName}`,
            {
                responseType: 'arraybuffer',
            },
        );

        fs.writeFileSync(zipPath, response.data);
        console.log(`Saved ${fileName} to ${zipPath}`);
    }

    /**
     * 파일을 압축 해제합니다.
     * @param fileName
     */
    public unzip(fileName: string) {
        const zip = new AdmZip(this.getZipPath(fileName));
        zip.extractAllTo(this.tempDir, true);
        console.log(`Unzipped ${fileName}`);
    }

    /**
     * 파일 경로를 반환합니다.
     * @param fileName
     * @private
     */
    private getZipPath(fileName: string) {
        return path.join(this.tempDir, fileName);
    }
}

async function main() {
    const stockDownloader = new StockDownloader();

    for (const fileName of DOWNLOAD_FILES) {
        await stockDownloader.download(fileName);

        stockDownloader.unzip(fileName);
    }
}

main().catch(console.error);
