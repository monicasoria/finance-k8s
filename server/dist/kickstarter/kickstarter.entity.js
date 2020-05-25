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
const typeorm_1 = require("typeorm");
let Kickstarter = class Kickstarter extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: "ID", type: "int" }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "name", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: "category", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({ name: "main_category", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "mainCategory", void 0);
__decorate([
    typeorm_1.Column({ name: "currency", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column({ name: "deadline", type: "date", nullable: true }),
    __metadata("design:type", Date)
], Kickstarter.prototype, "deadline", void 0);
__decorate([
    typeorm_1.Column({ name: "goal", type: "float", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "goal", void 0);
__decorate([
    typeorm_1.Column({ name: "launched", type: "date", nullable: true }),
    __metadata("design:type", Date)
], Kickstarter.prototype, "launched", void 0);
__decorate([
    typeorm_1.Column({ name: "pledged", type: "float", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "pledged", void 0);
__decorate([
    typeorm_1.Column({ name: "state", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ name: "backers", type: "int", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "backers", void 0);
__decorate([
    typeorm_1.Column({ name: "country", type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Kickstarter.prototype, "country", void 0);
__decorate([
    typeorm_1.Column({ name: "usd_pledged", type: "float", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "usdPledged", void 0);
__decorate([
    typeorm_1.Column({ name: "usd_pledged_real", type: "float", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "usdPledgedReal", void 0);
__decorate([
    typeorm_1.Column({ name: "usd_goal_real", type: "float", nullable: true }),
    __metadata("design:type", Number)
], Kickstarter.prototype, "usdGoalReal", void 0);
Kickstarter = __decorate([
    typeorm_1.Entity()
], Kickstarter);
exports.Kickstarter = Kickstarter;
//# sourceMappingURL=kickstarter.entity.js.map