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
exports.Planning = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Planning = class Planning {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Planning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Planning.prototype, "by", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Planning.prototype, "with", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Planning.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Planning.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Planning.prototype, "isValidated", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "by" }),
    __metadata("design:type", user_entity_1.User)
], Planning.prototype, "by_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "with" }),
    __metadata("design:type", user_entity_1.User)
], Planning.prototype, "with_id", void 0);
Planning = __decorate([
    (0, typeorm_1.Entity)()
], Planning);
exports.Planning = Planning;
//# sourceMappingURL=planning.entity.js.map