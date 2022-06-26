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
exports.SwipeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const swipe_entity_1 = require("./entities/swipe.entity");
let SwipeService = class SwipeService {
    constructor(data) {
        this.data = data;
    }
    create(createSwipeDto) {
        return this.data.save(createSwipeDto);
    }
    findOne(id) {
        return this.data.findOne(id);
    }
    async findIdWithUsers(user_1, user_2) {
        const res = await this.data.findOne({ where: [
                { user_1: user_1, user_2: user_2 },
                { user_1: user_2, user_2: user_1 }
            ] });
        if (res) {
            return res.id;
        }
        throw new common_1.NotFoundException();
    }
    checkSwipe(user_1, user_2) {
        return this.data.findOne({ where: [
                { user_1: user_1, user_2: user_2 },
                { user_1: user_2, user_2: user_1 }
            ] });
    }
    async findUsersId(id) {
        const usersId = await this.data.find({
            select: ["user_1", "user_2"],
            where: [
                { user_1: id, user_2: (0, typeorm_2.Not)(id), isMatched: true },
                { user_2: id, user_1: (0, typeorm_2.Not)(id), isMatched: true },
            ]
        });
        let ids = [];
        usersId.forEach(e => {
            if (Number(e.user_1) != id) {
                ids.push(e.user_1);
            }
            if (Number(e.user_2) != id) {
                ids.push(e.user_2);
            }
        });
        return ids;
    }
    async update(id, dto) {
        let done = await this.data.update(id, dto);
        if (done.affected != 1)
            throw new common_1.NotFoundException(id);
        return this.findOne(id);
    }
};
SwipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(swipe_entity_1.Swipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SwipeService);
exports.SwipeService = SwipeService;
//# sourceMappingURL=swipe.service.js.map