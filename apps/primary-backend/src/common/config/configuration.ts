export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV || 'development',
    allowOrigins: process.env.APP_ALLOW_ORIGINS,
    apiPrefix: process.env.APP_API_PREFIX,
    port: parseInt(process.env.APP_PORT ?? '3000', 10),
    name: process.env.APP_NAME,
    frontendDomain: process.env.APP_FRONTEND_DOMAIN,
    backendDomain: process.env.APP_BACKEND_DOMAIN,
  },

  database: {
    mongoUri: process.env.DATABASE_URI,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES || "7d",
  },

  apiKey: {
    length: parseInt(process.env.API_KEY_LENGTH ?? '20', 10),
    alphabetSet: process.env.ALPHABET_SET,
  }

  // redis: {
  //   url: process.env.REDIS_URL,
  // },
});