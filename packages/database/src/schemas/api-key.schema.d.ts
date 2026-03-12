import { HydratedDocument, Types } from 'mongoose';
export type ApiKeyDocument = HydratedDocument<ApiKey>;
export declare class ApiKey {
    userId: Types.ObjectId;
    name: string;
    apiKey: string;
    disabled: boolean;
    deleted: boolean;
    lastUsed: Date | null;
    creditsConsumed: number;
}
export declare const ApiKeySchema: import("mongoose").Schema<ApiKey, import("mongoose").Model<ApiKey, any, any, any, import("mongoose").Document<unknown, any, ApiKey, any, {}> & ApiKey & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ApiKey, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ApiKey>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<ApiKey> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
