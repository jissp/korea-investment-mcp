import * as fs from 'node:fs';
import path from 'node:path';

export abstract class BaseParser<T = unknown> {
    private static readonly ASSETS_DIR = '../../src/common/assets';

    protected abstract readonly fieldIndices: number[];

    public parse(content: string): T[] {
        const lines = content.split('\n');

        return lines.map((line) => this.extractFields(line));
    }

    private extractFields(line: string): T {
        const fields = [];

        let latestFieldIndex = 0;
        for (const fieldIndex of this.fieldIndices) {
            fields.push(
                line
                    .slice(latestFieldIndex, fieldIndex - latestFieldIndex)
                    .trim(),
            );

            latestFieldIndex = fieldIndex;
        }

        return this.toObject(fields);
    }

    public saveAsset(fileName: string, data: T[]): void {
        const outputPath = this.getAssetsDir(`${fileName}.json`);

        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    }

    private getAssetsDir(fileName?: string) {
        const paths = [__dirname, BaseParser.ASSETS_DIR];
        if (fileName) {
            paths.push(fileName);
        }

        return path.join(...paths);
    }

    protected abstract toObject(fields: string[]): T;
}
