import { NestFactory } from '@nestjs/core';
import { McpServerModule } from './mcp-server';

async function bootstrap() {
    const app = await NestFactory.create(McpServerModule);
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
