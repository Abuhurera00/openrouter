import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ModelProviderMappingDocument = HydratedDocument<ModelProviderMapping>;

@Schema({ timestamps: true })
export class ModelProviderMapping {
  @Prop({ type: Types.ObjectId, ref: 'Model', required: true })
  modelId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Provider', required: true })
  providerId: Types.ObjectId;

  // Cost in micro-credits per token (store as integers to avoid float issues)
  @Prop({ required: true })
  inputTokenCost: number;

  @Prop({ required: true })
  outputTokenCost: number;
}

export const ModelProviderMappingSchema = SchemaFactory.createForClass(ModelProviderMapping);