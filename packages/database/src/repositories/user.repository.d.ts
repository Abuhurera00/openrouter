import { Model } from 'mongoose';
import { UserDocument } from '../schemas';
import { BaseRepository } from './base.repository';
export declare class UserRepository extends BaseRepository<UserDocument> {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
}
