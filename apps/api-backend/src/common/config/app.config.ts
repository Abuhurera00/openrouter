export interface AppConfig {
    port: number;
  
    database: {
      mongoUri: string;
    };
  
    // redis: {
    //   url: string;
    // };
  }