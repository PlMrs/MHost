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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const roles_guard_1 = require("../auth/security/roles.guard");
const roles_decorator_1 = require("../auth/security/roles.decorator");
const user_entity_1 = require("./entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
const swipe_service_1 = require("../swipe/swipe.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const fs_1 = require("fs");
const jwt_1 = require("@nestjs/jwt");
const verified_decorator_1 = require("../auth/security/verified.decorator");
const bcrypt = require("bcryptjs");
const jwts = new jwt_1.JwtService({ secret: process.env.JWT_SECRET });
let UsersController = class UsersController {
    constructor(usersService, swipeService) {
        this.usersService = usersService;
        this.swipeService = swipeService;
    }
    async create(dto) {
        const isExisted = await this.usersService.findByEmail(dto.email);
        if (isExisted) {
            throw new common_1.HttpException('User already exist', common_1.HttpStatus.UNAUTHORIZED);
        }
        const salt = await bcrypt.genSalt(10);
        dto.password = await bcrypt.hash(dto.password, salt);
        return this.usersService.create(dto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findNotSwiped(id, needs) {
        return this.usersService.findNotSwiped(id, needs);
    }
    async findMatched(token) {
        const { id } = jwts.decode(token.split(' ')[1]);
        const ids = await this.swipeService.findUsersId(id);
        return this.usersService.findAllWithIds(ids);
    }
    update(id, token, updateUserDto) {
        const { id: token_id } = jwts.decode(token.split(' ')[1]);
        if (Number(id) === token_id) {
            return this.usersService.update(+id, updateUserDto);
        }
        throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
    }
    validateUser(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    async uploadFile(token, file) {
        const { id } = jwts.decode(token.split(' ')[1]);
        const user = await this.usersService.findOne(id);
        const dto = { picture: file.filename };
        const res = await this.usersService.update(id, dto);
        if (res.affected === 1) {
            this.usersService.deletePicture(user.picture);
            return file.filename;
        }
    }
    async adminRemove(user) {
        this.usersService.remove(user);
        this.usersService.deletePicture(user.picture);
        return common_1.HttpStatus.OK;
    }
    async postVerifiedFiles(token, files) {
        const { id } = jwts.decode(token.split(' ')[1]);
        const dto = { carte_id: files.carte_id[0].filename, certificatScolaire: files.certificatScolaire[0].filename };
        return this.usersService.update(id, dto);
    }
    getNotVerifiedUsers() {
        return this.usersService.findNotVerified();
    }
    returnUserFile(res, token, id, filename) {
        let jwt;
        try {
            jwt = jwts.verify(token, { secret: process.env.JWT_SECRET });
        }
        catch (e) {
            return 'token invalide';
        }
        if (jwt.role === "A") {
            const file = (0, fs_1.createReadStream)(`../server-storage/${id}/${filename}`);
            res.set({
                'Content-Type': 'application/json',
                'Content-Disposition': 'attachment; filename="' + filename + '"',
            });
            return new common_1.StreamableFile(file);
        }
        else {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Ajout d'un utilisateur en base de donnée" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Utilisateur ajouté avec succès",
        type: user_entity_1.User,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Liste de tous les utilisateurs" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Tous les utilisateurs",
        type: [user_entity_1.User],
    }),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Get)('swipe'),
    __param(0, (0, common_1.Headers)('user_id')),
    __param(1, (0, common_1.Headers)('needs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findNotSwiped", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Get)('match'),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMatched", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, swagger_1.ApiOperation)({ description: "Modifie un utilisateur grace à son id" }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "L'utilisateur n'a pas été trouvé" }),
    (0, swagger_1.ApiOkResponse)({
        description: "L'utilisateur patché",
        type: user_entity_1.User,
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    (0, common_1.Patch)('verified/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "validateUser", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
                return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: '../front/assets/images/users/picture',
            filename: (req, file, callback) => {
                const splited = file.originalname.split('.');
                const ext = splited[splited.length - 1];
                callback(null, `${(0, uuid_1.v4)()}.${ext}`);
            }
        })
    })),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadFile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: "Supprime un utilisateur grace à son id" }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "L'utilisateur n'a pas été trouvé" }),
    (0, swagger_1.ApiOkResponse)({ description: "L'utilisateur a été supprimé" }),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "adminRemove", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CUSTOMER),
    (0, verified_decorator_1.Verified)(false),
    (0, common_1.Post)('uploadVerifications'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "carte_id", maxCount: 1 },
        { name: "certificatScolaire", maxCount: 1 }
    ], {
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|JPG|JPEG|PNG|PDF)$/)) {
                return callback(new Error('Only image files and pdf are allowed!'), false);
            }
            callback(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, callback) => {
                const { id: user_id } = jwts.decode(req.headers.authorization.split(' ')[1]);
                const dest = `../server-storage/${user_id}`;
                const destExist = (0, fs_1.existsSync)(dest);
                if (!destExist) {
                    (0, fs_1.mkdirSync)(dest);
                }
                return callback(null, dest);
            },
            filename: (req, file, callback) => {
                const { id: user_id } = jwts.decode(req.headers.authorization.split(' ')[1]);
                const splited = file.originalname.split('.');
                const ext = splited[splited.length - 1];
                callback(null, `${user_id}-${file.fieldname}.${ext}`);
            }
        })
    })),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postVerifiedFiles", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    (0, common_1.Get)('verifications'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getNotVerifiedUsers", null);
__decorate([
    (0, common_1.Get)('files'),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __param(1, (0, common_1.Query)('bearer')),
    __param(2, (0, common_1.Query)('user_id')),
    __param(3, (0, common_1.Query)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "returnUserFile", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        swipe_service_1.SwipeService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map