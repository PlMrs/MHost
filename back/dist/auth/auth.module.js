"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const my_basic_strategy_1 = require("./security/strategies/my-basic.strategy");
const swipe_module_1 = require("../swipe/swipe.module");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const my_bearer_strategy_1 = require("./security/strategies/my-bearer.strategy");
const token_controller_1 = require("./token/token.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [token_controller_1.TokenController],
        providers: [users_service_1.UsersService, my_basic_strategy_1.MyBasicStrategy, my_bearer_strategy_1.MyBearerStrategy],
        imports: [
            passport_1.PassportModule,
            swipe_module_1.SwipeModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || "MyDigitalSchool Lyon cest top",
                signOptions: {
                    audience: process.env.JWT_AUDIENCE || "localhost:3000"
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map