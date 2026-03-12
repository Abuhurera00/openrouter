import { Model } from 'mongoose';
import { ModelDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class ModelRepository extends BaseRepository<ModelDocument> {
    private readonly modelModel;
    constructor(modelModel: Model<ModelDocument>);
}
