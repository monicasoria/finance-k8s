import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger: Logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port: number = 5000;
  await app.listen(5000);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
