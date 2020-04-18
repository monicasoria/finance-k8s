"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("UserRepository");
    }
    async insertUser(userInsertionDto) {
        const user = new user_entity_1.User();
        user.firstName = userInsertionDto.firstName;
        user.lastName = userInsertionDto.lastName;
        user.isActive = userInsertionDto.isActive;
        try {
            await user.save();
            this.logger.log(`Successfully saved user: ${user.firstName} ${user.lastName}`);
            return user;
        }
        catch (error) {
            this.logger.error(error);
            this.logger.error(`Failed to insert user: ${user.firstName} ${user.lastName}`);
        }
    }
    async getAllUsers() {
        const users = await this.createQueryBuilder("allUsers")
            .getMany();
        return users;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map