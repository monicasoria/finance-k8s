import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dbName: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD
}));
