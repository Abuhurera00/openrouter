import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;

// This is the core usage log — every LLM call creates one of these.
// It links user -> apiKey -> modelProviderMapping so you know
// who called what model via which provider and at what cost.
@Schema({ timestamps: true })
export class Conversation {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'ApiKey', required: true })
  apiKeyId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'ModelProviderMapping', required: true })
  modelProviderMappingId!: Types.ObjectId;

  @Prop({ required: true })
  input!: string;

  @Prop({ required: true })
  output!: string;

  @Prop({ required: true })
  inputTokenCount!: number;

  @Prop({ required: true })
  outputTokenCount!: number;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);