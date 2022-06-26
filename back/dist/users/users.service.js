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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fs_1 = require("fs");
const swipe_entity_1 = require("../swipe/entities/swipe.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(data, swipe) {
        this.data = data;
        this.swipe = swipe;
    }
    create(createUserDto) {
        return this.data.save(createUserDto);
    }
    findAll() {
        return this.data.find();
    }
    async findNotSwiped(id_user, needs_user) {
        let array = [];
        let needs;
        array.push(id_user);
        const ids = await this.swipe.find({
            select: ["user_1", "user_2"], where: [
                { user_1: id_user, isMatched: true },
                { user_2: id_user, isMatched: true }
            ]
        });
        ids.map(id => {
            if (Number(id.user_1) != id_user) {
                array.push(id.user_1);
            }
            if (Number(id.user_2) != id_user) {
                array.push(id.user_2);
            }
        });
        if (needs_user === 'H') {
            needs = "T";
        }
        else if (needs_user === 'T') {
            needs = "H";
        }
        else {
            needs = "D";
        }
        return this.data.find({
            select: ["id", "name", "surname", "needs", "picture", "description"],
            where: {
                role: (0, typeorm_2.Not)(user_entity_1.UserRole.ADMIN),
                id: (0, typeorm_2.Not)((0, typeorm_2.In)(array)),
                needs: needs
            }
        });
    }
    findAllWithIds(ids) {
        return this.data.find({ where: { id: (0, typeorm_2.In)(ids) } });
    }
    findOne(id) {
        return this.data.findOneOrFail(id).catch(e => {
            throw new common_1.NotFoundException(id);
        });
    }
    findByEmail(email) {
        return this.data.findOne({ email });
    }
    update(id, updateUserDto) {
        return this.data.update(id, updateUserDto);
    }
    remove(id) {
        return this.data.remove(id);
    }
    deletePicture(picture) {
        if (picture === "default.jpg") {
            return;
        }
        const path = `../front/assets/images/users/picture/${picture}`;
        try {
            (0, fs_1.unlinkSync)(path);
            return 200;
        }
        catch (e) {
            console.log(e);
        }
    }
    findNotVerified() {
        return this.data.find({
            where: { carte_id: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()), certificatScolaire: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()), verified: false }
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(swipe_entity_1.Swipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map