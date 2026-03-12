import { HydratedDocument, Types } from 'mongoose';
export type ModelDocument = HydratedDocument<Model>;
export declare class Model {
    name: string;
    slug: string;
    companyId: Types.ObjectId;
}
export declare const ModelSchema: import("mongoose").Schema<Model, import("mongoose").Model<Model, any, any, any, import("mongoose").Document<unknown, any, Model, any, {}> & Model & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Model, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Model>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Model> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
