import { NotFoundException } from '@nestjs/common';

export interface IConfiguration {
    koreaInvestment: {
        user: {
            id: string;
        };
        api: {
            host: string;
            key: string;
            secret: string;
        };
    };
}

export default (): IConfiguration => ({
    koreaInvestment: {
        user: {
            id: getEnv('KOREA_INVESTMENT_USER_ID'),
        },
        api: {
            host: getEnv('KOREA_INVESTMENT_HOST'),
            key: getEnv('KOREA_INVESTMENT_APP_KEY'),
            secret: getEnv('KOREA_INVESTMENT_APP_SECRET'),
        },
    },
});

function getEnv(key: string): string {
    if (!process.env[key]) {
        throw new NotFoundException(
            `Missing required environment variable: ${key}`,
        );
    }

    return process.env[key];
}
