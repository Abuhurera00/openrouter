import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";
import { ModelProviderMapping, ModelProviderMappingDocument } from "../schemas";

@Injectable()
export class ModelProviderMappingRepository extends BaseRepository<ModelProviderMappingDocument> {
    constructor(
        @InjectModel(ModelProviderMapping.name) private readonly modelProviderMappingModel: Model<ModelProviderMappingDocument>
    ) {
        super(modelProviderMappingModel)
    }
}