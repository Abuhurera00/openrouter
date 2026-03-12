import { HydratedDocument, Types } from 'mongoose';
export type ModelProviderMappingDocument = HydratedDocument<ModelProviderMapping>;
export declare class ModelProviderMapping {
    modelId: Types.ObjectId;
    providerId: Types.ObjectId;
    inputTokenCost: number;
    outputTokenCost: number;
}
export declare const ModelProviderMappingSchema: import("mongoose").Schema<ModelProviderMapping, import("mongoose").Model<ModelProviderMapping, any, any, any, import("mongoose").Document<unknown, any, ModelProviderMapping, any, {}> & ModelProviderMapping & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModelProviderMapping, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ModelProviderMapping>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<ModelProviderMapping> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
