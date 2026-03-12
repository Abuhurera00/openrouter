import { Model } from 'mongoose';
import { ConversationDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class ConversationRepository extends BaseRepository<ConversationDocument> {
    private readonly conversationModel;
    constructor(conversationModel: Model<ConversationDocument>);
}
