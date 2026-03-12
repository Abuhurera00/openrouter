import { HydratedDocument, Types } from 'mongoose';
export type OnrampTransactionDocument = HydratedDocument<OnrampTransaction>;
export declare enum TransactionStatus {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed"
}
export declare class OnrampTransaction {
    userId: Types.ObjectId;
    amount: number;
    status: TransactionStatus;
}
export declare const OnrampTransactionSchema: import("mongoose").Schema<OnrampTransaction, import("mongoose").Model<OnrampTransaction, any, any, any, import("mongoose").Document<unknown, any, OnrampTransaction, any, {}> & OnrampTransaction & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OnrampTransaction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OnrampTransaction>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OnrampTransaction> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
