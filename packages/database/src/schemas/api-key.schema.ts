import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ApiKeyDocument = HydratedDocument<ApiKey>;

@Schema({ timestamps: true })
export class ApiKey {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  apiKey: string;

  @Prop({ default: false })
  disabled: boolean;

  @Prop({ default: false })
  deleted: boolean;

  @Prop({ type: Date, default: null })
  lastUsed: Date | null;

  @Prop({ default: 0 })
  creditsConsumed: number;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);