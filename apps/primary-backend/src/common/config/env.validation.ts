import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  APP_PORT: Joi.number().default(3000),
  APP_API_PREFIX: Joi.string().default('api'),
  APP_NAME: Joi.string().default('Open Router API'),
  APP_FRONTEND_DOMAIN: Joi.string().default('http://localhost:5173'),
  APP_BACKEND_DOMAIN: Joi.string().default('http://localhost:3000'),
  DATABASE_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES: Joi.string().default('7d'),
  API_KEY_LENGTH: Joi.number().default(20),
  ALPHABET_SET: Joi.string().default('zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890'),

  //   REDIS_URL: Joi.string().required(),
});