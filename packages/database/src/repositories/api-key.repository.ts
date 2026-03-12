import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";
import { ApiKey, ApiKeyDocument } from "../schemas";

@Injectable()
export class ApiKeyRepository extends BaseRepository<ApiKeyDocument> {
    constructor(
        @InjectModel(ApiKey.name) private readonly apiKeyModel: Model<ApiKeyDocument>
    ) {
        super(apiKeyModel)
    }
}