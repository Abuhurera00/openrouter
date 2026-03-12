import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";
import { ModelProviderMappingDocument } from "../schemas";
export declare class ModelProviderMappingRepository extends BaseRepository<ModelProviderMappingDocument> {
    private readonly modelProviderMappingModel;
    constructor(modelProviderMappingModel: Model<ModelProviderMappingDocument>);
}
