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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const worker_service_1 = require("./worker.service");
let WorkerController = class WorkerController {
    constructor(workerService) {
        this.workerService = workerService;
    }
    async getFibonacci(index) {
        return await this.workerService.fibonacci(index);
    }
};
__decorate([
    common_1.Get("fibonacci/:index"),
    __param(0, common_1.Param("index")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "getFibonacci", null);
WorkerController = __decorate([
    common_1.Controller("worker"),
    __metadata("design:paramtypes", [worker_service_1.WorkerService])
], WorkerController);
exports.WorkerController = WorkerController;
//# sourceMappingURL=worker.controller.js.map