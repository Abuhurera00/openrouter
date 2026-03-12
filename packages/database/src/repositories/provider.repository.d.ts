import { Model } from 'mongoose';
import { ProviderDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class ProviderRepository extends BaseRepository<ProviderDocument> {
    private readonly providerModel;
    constructor(providerModel: Model<ProviderDocument>);
}
