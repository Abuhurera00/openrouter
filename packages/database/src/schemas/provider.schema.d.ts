import { HydratedDocument } from 'mongoose';
export type ProviderDocument = HydratedDocument<Provider>;
export declare class Provider {
    name: string;
    website: string;
}
export declare const ProviderSchema: import("mongoose").Schema<Provider, import("mongoose").Model<Provider, any, any, any, import("mongoose").Document<unknown, any, Provider, any, {}> & Provider & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Provider, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Provider>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Provider> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
