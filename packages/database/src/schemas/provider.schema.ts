import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProviderDocument = HydratedDocument<Provider>;

@Schema({ timestamps: true })
export class Provider {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  website!: string;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);