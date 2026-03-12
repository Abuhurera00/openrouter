import { Model } from 'mongoose';
import { OnrampTransactionDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class OnrampTransactionRepository extends BaseRepository<OnrampTransactionDocument> {
    private readonly txModel;
    constructor(txModel: Model<OnrampTransactionDocument>);
}
