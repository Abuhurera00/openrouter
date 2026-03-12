import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";
import { ApiKeyDocument } from "../schemas";
export declare class ApiKeyRepository extends BaseRepository<ApiKeyDocument> {
    private readonly apiKeyModel;
    constructor(apiKeyModel: Model<ApiKeyDocument>);
}
