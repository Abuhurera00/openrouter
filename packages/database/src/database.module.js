"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("./schemas");
const schemas_2 = require("./schemas");
const schemas_3 = require("./schemas");
const schemas_4 = require("./schemas");
const schemas_5 = require("./schemas");
const schemas_6 = require("./schemas");
const schemas_7 = require("./schemas");
const schemas_8 = require("./schemas");
const repositories_1 = require("./repositories");
const SCHEMAS = mongoose_1.MongooseModule.forFeature([
    { name: schemas_1.User.name, schema: schemas_1.UserSchema },
    { name: schemas_2.ApiKey.name, schema: schemas_2.ApiKeySchema },
    { name: schemas_3.Company.name, schema: schemas_3.CompanySchema },
    { name: schemas_4.Model.name, schema: schemas_4.ModelSchema },
    { name: schemas_5.Provider.name, schema: schemas_5.ProviderSchema },
    { name: schemas_6.ModelProviderMapping.name, schema: schemas_6.ModelProviderMappingSchema },
    { name: schemas_7.OnrampTransaction.name, schema: schemas_7.OnrampTransactionSchema },
    { name: schemas_8.Conversation.name, schema: schemas_8.ConversationSchema },
]);
const REPOSITORIES = [
    repositories_1.UserRepository,
    repositories_1.ApiKeyRepository,
    repositories_1.ModelProviderMappingRepository,
    repositories_1.ConversationRepository,
    repositories_1.OnrampTransactionRepository,
    repositories_1.ProviderRepository,
    repositories_1.ModelRepository,
    repositories_1.CompanyRepository
];
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [SCHEMAS],
        providers: [...REPOSITORIES],
        exports: [mongoose_1.MongooseModule, ...REPOSITORIES],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map