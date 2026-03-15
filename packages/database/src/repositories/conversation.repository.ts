import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Conversation, ConversationDocument } from '../schemas';
import { BaseRepository } from './base.repository';

@Injectable()
export class ConversationRepository extends BaseRepository<ConversationDocument> {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<ConversationDocument>,
  ) {
    super(conversationModel);
  }
}