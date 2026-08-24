export const config = {
  port: Number(process.env.PORT ?? 4000),
  jwtSecret: process.env.JWT_SECRET ?? "dev-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  databaseUrl: process.env.DATABASE_URL ?? "",
  uploadDir: process.env.UPLOAD_DIR ?? "uploads",
  maxFileSize: Number(process.env.MAX_FILE_SIZE ?? 5 * 1024 * 1024),
};