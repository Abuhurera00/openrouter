"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(document) {
        const created = new this.model(document);
        return created.save();
    }
    async findAll(query = {}, projection, options) {
        return this.model.find(query, projection, options).lean().exec();
    }
    async findOne(query, projection, options) {
        return this.model.findOne(query, projection, options).lean().exec();
    }
    async findById(id, projection) {
        return this.model.findById(id, projection).lean().exec();
    }
    async updateOne(query, update, options = { new: true }) {
        return this.model
            .findOneAndUpdate(query, update, options)
            .lean()
            .exec();
    }
    async updateById(id, update, options = { new: true }) {
        return this.model
            .findByIdAndUpdate(id, update, options)
            .lean()
            .exec();
    }
    async updateMany(query, update) {
        return this.model.updateMany(query, update).exec();
    }
    async deleteOne(query) {
        return this.model.deleteOne(query).exec();
    }
    async deleteById(id) {
        return this.model.findByIdAndDelete(id).lean().exec();
    }
    async deleteMany(query) {
        return this.model.deleteMany(query).exec();
    }
    async bulkWrite(operations) {
        return this.model.bulkWrite(operations);
    }
    async aggregate(pipeline) {
        return this.model.aggregate(pipeline).exec();
    }
    async count(query = {}) {
        return this.model.countDocuments(query).exec();
    }
    async exists(query) {
        return this.model.exists(query).exec();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map