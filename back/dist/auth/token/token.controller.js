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
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/users.service");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const signin_user_dto_1 = require("./dto/signin-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const roles_guard_1 = require("../security/roles.guard");
const roles_decorator_1 = require("../security/roles.decorator");
let TokenController = class TokenController {
    constructor(users, jwts) {
        this.users = users;
        this.jwts = jwts;
    }
    async signIn(auth) {
        let args = auth && auth.split(" ");
        if (args && args.length == 2 && args[0] == "Basic") {
            const credentials = Buffer.from(args[1], "base64").toString("utf8").split(":");
            const email = credentials[0];
            const password = credentials[1];
            const user = await this.users.findByEmail(email);
            if (user && await bcrypt.compare(password, user.password)) {
                const cr = new signin_user_dto_1.SignInDto();
                cr.grant_type = "password";
                cr.scope = "*";
                cr.expires_in = "1h";
                cr.access_token = await this.jwts.sign({
                    id: user.id,
                    role: user.role,
                    verified: user.verified
                }, {
                    subject: user.email,
                    expiresIn: "1h"
                });
                return cr;
            }
            else {
                throw new common_1.HttpException('Connexion impossible, utilisateur ou mot de passe incorrect', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        throw new common_1.UnauthorizedException("Invalid or missing Basic credential ");
    }
    async getSession(token) {
        const jwt = token.split(" ")[1];
        try {
            const { id } = this.jwts.verify(jwt, { secret: process.env.JWT_SECRET });
            const u = await this.users.findOne(id);
            return { user: u };
        }
        catch (e) {
            return e;
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Authentifier un utilisateur" }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: "Authentification failed" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Authentifié en tant qu'utilisateur",
        type: signin_user_dto_1.SignInDto
    }),
    (0, common_1.Post)('/token'),
    __param(0, (0, common_1.Body)("Authorization")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "signIn", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Get)('/session'),
    __param(0, (0, common_1.Headers)("Authorization")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "getSession", null);
TokenController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map