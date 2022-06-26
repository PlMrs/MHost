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
exports.MyBasicStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_http_1 = require("passport-http");
const users_service_1 = require("../../../users/users.service");
const bcrypt = require("bcryptjs");
let MyBasicStrategy = class MyBasicStrategy extends (0, passport_1.PassportStrategy)(passport_http_1.BasicStrategy) {
    constructor(users) {
        super();
        this.users = users;
    }
    async validate(login, password) {
        const user = await this.users.findByEmail(login);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        throw new common_1.UnauthorizedException();
    }
};
MyBasicStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], MyBasicStrategy);
exports.MyBasicStrategy = MyBasicStrategy;
//# sourceMappingURL=my-basic.strategy.js.map