import { createLogger, format, transports } from 'winston';

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`;
});

export const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // コンソール
    new transports.Console(),

    // エラーログ
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),

    // 全ログ
    new transports.File({
      filename: 'logs/app.log',
    }),
  ],
});
