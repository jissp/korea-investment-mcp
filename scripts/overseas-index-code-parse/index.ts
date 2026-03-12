import * as fs from 'node:fs';
import * as path from 'node:path';
import { OverseasIndexData, Parser } from './parser';

function main() {
    const parser = new Parser();

    const mstFileNames = ['frgn_code'];

    for (const fileName of mstFileNames) {
        const filePath = path.join(__dirname, 'asserts', `${fileName}.mst`);

        try {
            const data: OverseasIndexData[] = parser.parse(filePath);

            // JSON 파일로 저장
            const outputPath = path.join(
                __dirname,
                '..',
                '..',
                'src',
                'common',
                'assets',
                'overseas',
                `${fileName}.json`,
            );

            fs.writeFileSync(
                outputPath,
                JSON.stringify(data, null, 2),
                'utf-8',
            );
        } catch (error) {
            console.error(`Error parsing ${fileName}:`, error);
        }
    }
}

main();
