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
exports.SwipeController = void 0;
const common_1 = require("@nestjs/common");
const swipe_service_1 = require("./swipe.service");
const create_swipe_dto_1 = require("./dto/create-swipe.dto");
const roles_guard_1 = require("../auth/security/roles.guard");
const roles_decorator_1 = require("../auth/security/roles.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const jwts = new jwt_1.JwtService({ secret: process.env.JWT_SECRET });
let SwipeController = class SwipeController {
    constructor(SwipeService) {
        this.SwipeService = SwipeService;
    }
    async create(dto) {
        const alreadySwiped = await this.SwipeService.checkSwipe(dto.user_1, dto.user_2);
        if (alreadySwiped && alreadySwiped.isMatched) {
            return;
        }
        if (alreadySwiped) {
            return this.SwipeService.update(alreadySwiped.id, { isMatched: true });
        }
        return this.SwipeService.create(dto);
    }
    async update(id, dto) {
        return this.SwipeService.update(id, dto);
    }
    findId(token, user_2) {
        const { id: user_1 } = jwts.decode(token.split(' ')[1]);
        return this.SwipeService.findIdWithUsers(user_1, user_2);
    }
};
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_swipe_dto_1.CreateSwipeDto]),
    __metadata("design:returntype", Promise)
], SwipeController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Get)('id-with-users'),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.Headers)("user_2")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], SwipeController.prototype, "findId", null);
SwipeController = __decorate([
    (0, common_1.Controller)('swipe'),
    __metadata("design:paramtypes", [swipe_service_1.SwipeService])
], SwipeController);
exports.SwipeController = SwipeController;
//# sourceMappingURL=swipe.controller.js.map