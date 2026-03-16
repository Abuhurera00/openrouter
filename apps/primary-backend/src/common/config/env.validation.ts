import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  APP_PORT: Joi.number().default(3000),
  APP_API_PREFIX: Joi.string().default('api'),
  APP_NAME: Joi.string().default('Open Router API'),
  APP_FRONTEND_DOMAIN: Joi.string().default('http://localhost:5173'),
  APP_BACKEND_DOMAIN: Joi.string().default('http://localhost:3000'),

  DATABASE_URI: Joi.string().required(),

  //   REDIS_URL: Joi.string().required(),
});