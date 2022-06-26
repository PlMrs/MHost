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
exports.PlanningController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../auth/security/roles.decorator");
const roles_guard_1 = require("../auth/security/roles.guard");
const verified_decorator_1 = require("../auth/security/verified.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_planning_dto_1 = require("./dto/create-planning.dto");
const planning_service_1 = require("./planning.service");
let PlanningController = class PlanningController {
    constructor(planningService) {
        this.planningService = planningService;
    }
    findAllWithIds(user_1, user_2) {
        return this.planningService.findAllWithIds(user_1, user_2);
    }
    async create(dto) {
        const res = await this.planningService.create(dto);
        if (res) {
            return common_1.HttpStatus.CREATED;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)("user_1")),
    __param(1, (0, common_1.Headers)("user_2")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "findAllWithIds", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, verified_decorator_1.Verified)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_planning_dto_1.CreatePlanningDto]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "create", null);
PlanningController = __decorate([
    (0, common_1.Controller)('planning'),
    __metadata("design:paramtypes", [planning_service_1.PlanningService])
], PlanningController);
exports.PlanningController = PlanningController;
//# sourceMappingURL=planning.controller.js.map