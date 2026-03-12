"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelProviderMappingSchema = exports.ModelProviderMapping = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ModelProviderMapping = class ModelProviderMapping {
    modelId;
    providerId;
    inputTokenCost;
    outputTokenCost;
};
exports.ModelProviderMapping = ModelProviderMapping;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Model', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelProviderMapping.prototype, "modelId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Provider', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelProviderMapping.prototype, "providerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ModelProviderMapping.prototype, "inputTokenCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ModelProviderMapping.prototype, "outputTokenCost", void 0);
exports.ModelProviderMapping = ModelProviderMapping = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ModelProviderMapping);
exports.ModelProviderMappingSchema = mongoose_1.SchemaFactory.createForClass(ModelProviderMapping);
//# sourceMappingURL=model-provider-mapping.schema.js.map