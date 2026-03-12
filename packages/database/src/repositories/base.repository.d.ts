import { Model, Types } from 'mongoose';
type FilterQuery<T> = Record<string, unknown>;
type ProjectionType<T> = Record<string, unknown>;
type QueryOptions<T = unknown> = Record<string, unknown>;
type UpdateQuery<T> = Record<string, unknown>;
type AnyBulkWriteOperation = Record<string, unknown>;
type DeleteResult = {
    deletedCount?: number;
};
type UpdateWriteOpResult = {
    matchedCount?: number;
    modifiedCount?: number;
};
export declare abstract class BaseRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(document: Partial<T>): Promise<T>;
    findAll(query?: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T[]>;
    findOne(query: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T | null>;
    findById(id: string | Types.ObjectId, projection?: ProjectionType<T>): Promise<T | null>;
    updateOne(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<T | null>;
    updateById(id: string | Types.ObjectId, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<T | null>;
    updateMany(query: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateWriteOpResult>;
    deleteOne(query: FilterQuery<T>): Promise<DeleteResult>;
    deleteById(id: string | Types.ObjectId): Promise<T | null>;
    deleteMany(query: FilterQuery<T>): Promise<DeleteResult>;
    bulkWrite(operations: AnyBulkWriteOperation[]): Promise<any>;
    aggregate<R = unknown>(pipeline: any[]): Promise<R[]>;
    count(query?: FilterQuery<T>): Promise<number>;
    exists(query: FilterQuery<T>): Promise<{
        _id: Types.ObjectId;
    } | null>;
}
export {};
