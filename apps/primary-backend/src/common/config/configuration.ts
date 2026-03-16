export default () => ({
  app: {
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

  // redis: {
  //   url: process.env.REDIS_URL,
  // },
});