import { Model } from 'mongoose';
import { CompanyDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class CompanyRepository extends BaseRepository<CompanyDocument> {
    private readonly companyModel;
    constructor(companyModel: Model<CompanyDocument>);
}
