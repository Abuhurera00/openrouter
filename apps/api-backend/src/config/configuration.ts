export default () => ({
    port: parseInt(process.env.PORT ?? '4000', 10),
  
    database: {
      mongoUri: process.env.MONGO_URI,
    },
  
    // redis: {
    //   url: process.env.REDIS_URL,
    // },
  });