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
exports.Messages = void 0;
const swipe_entity_1 = require("../../swipe/entities/swipe.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Messages = class Messages {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Messages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Messages.prototype, "match_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Messages.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Messages.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => swipe_entity_1.Swipe, swipe => swipe.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "match_id" }),
    __metadata("design:type", swipe_entity_1.Swipe)
], Messages.prototype, "matchid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "from" }),
    __metadata("design:type", user_entity_1.User)
], Messages.prototype, "user_1id", void 0);
Messages = __decorate([
    (0, typeorm_1.Entity)()
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=messages.entity.js.map