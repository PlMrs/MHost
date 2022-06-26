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
exports.Swipe = void 0;
const messages_entity_1 = require("../../messages/entities/messages.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Swipe = class Swipe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.OneToMany)(() => messages_entity_1.Messages, message => message.match_id),
    __metadata("design:type", Number)
], Swipe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Swipe.prototype, "user_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Swipe.prototype, "user_2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_1" }),
    __metadata("design:type", user_entity_1.User)
], Swipe.prototype, "user_1id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_2" }),
    __metadata("design:type", user_entity_1.User)
], Swipe.prototype, "user_2id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Swipe.prototype, "isMatched", void 0);
Swipe = __decorate([
    (0, typeorm_1.Entity)()
], Swipe);
exports.Swipe = Swipe;
//# sourceMappingURL=swipe.entity.js.map