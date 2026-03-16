import { Document, Model, Types } from 'mongoose';

type FilterQuery<T> = Record<string, unknown>;
type ProjectionType<T> = Record<string, unknown>;
type QueryOptions<T = unknown> = Record<string, unknown>;
type UpdateQuery<T> = Record<string, unknown>;
type AnyBulkWriteOperation = Record<string, unknown>;
type DeleteResult = { deletedCount?: number };
type UpdateWriteOpResult = { matchedCount?: number; modifiedCount?: number };

export abstract class BaseRepository<T> {
  constructor(protected readonly model: Model<T & Document>) { }

  async create(document: Partial<T>): Promise<T> {
    const created = await this.model.create(document as any);
    return created.toObject();
  }

  async findAll(
    query: FilterQuery<T> = {},
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T[]> {
    return this.model.find(query, projection, options).lean<T[]>().exec();
  }

  async findOne(
    query: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T | null> {
    return this.model.findOne(query, projection, options).lean<T | null>().exec();
  }

  async findById(
    id: string | Types.ObjectId,
    projection?: ProjectionType<T>,
  ): Promise<T | null> {
    return this.model.findById(id, projection).lean<T | null>().exec();
  }

  async updateOne(
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options: QueryOptions<T> = { new: true },
  ): Promise<T | null> {
    return this.model
      .findOneAndUpdate(query, update, options)
      .lean<T | null>()
      .exec();
  }

  async updateById(
    id: string | Types.ObjectId,
    update: UpdateQuery<T>,
    options: QueryOptions<T> = { new: true },
  ): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, update, options)
      .lean<T | null>()
      .exec();
  }

  async updateMany(
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
  ): Promise<UpdateWriteOpResult> {
    return this.model.updateMany(query, update).exec();
  }

  async deleteOne(query: FilterQuery<T>): Promise<DeleteResult> {
    return this.model.deleteOne(query).exec();
  }

  async deleteById(id: string | Types.ObjectId): Promise<T | null> {
    return this.model.findByIdAndDelete(id).lean<T | null>().exec();
  }

  async deleteMany(query: FilterQuery<T>): Promise<DeleteResult> {
    return this.model.deleteMany(query).exec();
  }

  async bulkWrite(operations: AnyBulkWriteOperation[]): Promise<any> {
    return this.model.bulkWrite(operations as any[]);
  }

  async aggregate<R = unknown>(pipeline: any[]): Promise<R[]> {
    return this.model.aggregate<R>(pipeline).exec();
  }

  async count(query: FilterQuery<T> = {}): Promise<number> {
    return this.model.countDocuments(query).exec();
  }

  async exists(query: FilterQuery<T>): Promise<{ _id: Types.ObjectId } | null> {
    return this.model.exists(query).exec();
  }
}