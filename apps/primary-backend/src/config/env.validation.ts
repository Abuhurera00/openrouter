import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(4000),

  MONGO_URI: Joi.string().required(),

//   REDIS_URL: Joi.string().required(),
});