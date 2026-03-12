import fs from 'node:fs';
import path from 'node:path';
import * as iconv from 'iconv-lite';

export class MstReader {
    private static readonly ENCODING = 'cp949';
    private static readonly FILE_EXTENSION = '.mst';
    private static readonly TEMP_DIR = '../temp';

    constructor() {}

    public read(mstFileName: string): string {
        const buffer = fs.readFileSync(
            this.getTempDir(`${mstFileName}${MstReader.FILE_EXTENSION}`),
        );

        return this.decodeBuffer(buffer).trim();
    }

    private getTempDir(fileName?: string): string {
        const paths = [__dirname, MstReader.TEMP_DIR];
        if (fileName) {
            paths.push(fileName);
        }

        return path.join(...paths);
    }

    private decodeBuffer(buffer: Buffer): string {
        return iconv.decode(buffer, MstReader.ENCODING);
    }
}
