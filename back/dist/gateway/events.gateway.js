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
var EventsGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const user_entity_1 = require("../users/entities/user.entity");
var CHANNEL;
(function (CHANNEL) {
    CHANNEL["MESSAGE"] = "message";
})(CHANNEL || (CHANNEL = {}));
;
let EventsGateway = EventsGateway_1 = class EventsGateway {
    constructor() {
        this.users = [];
    }
    handleConnection(socket) {
        const { token: auth } = socket.handshake.auth;
        const token = auth && auth.startsWith("Bearer ") ? auth.substring(7) : null;
        if (token) {
            const jwts = new jwt_1.JwtService({ secret: process.env.JWT_SECRET });
            const claims = jwts.decode(token);
            const role = claims && claims["role"] ? claims["role"] : null;
            if (role && EventsGateway_1.GRANT.includes(role)) {
                if (this.users.filter(e => e.user_id === Number(socket.handshake.query.me)).length === 0) {
                    this.users.push({ user_id: Number(socket.handshake.query.me),
                        socket_id: socket.id
                    });
                }
                const ip = socket.client.conn.remoteAddress;
                EventsGateway_1.LOGGER.log(CHANNEL.MESSAGE, `Welcome @${socket.id} on @${ip}`);
                return;
            }
        }
        socket.disconnect();
    }
    handleMessage(socket, payload) {
        const [user] = this.users.filter(e => e.user_id === payload.user_id);
        if (!user) {
            return;
        }
        EventsGateway_1.LOGGER.log(`Sender ${socket.id} to ${user.socket_id} : ${payload.message}`);
        socket.to(user.socket_id).emit(CHANNEL.MESSAGE, payload.message);
        return 'ok';
    }
    handleDisconnect(socket) {
        const newUsers = this.users.filter(e => e.user_id != Number(socket.handshake.query.me));
        this.users = newUsers;
        this.server.emit(CHANNEL.MESSAGE, `Déconnecté`);
    }
};
EventsGateway.LOGGER = new common_1.Logger('Gateway');
EventsGateway.GRANT = [user_entity_1.UserRole.CUSTOMER, user_entity_1.UserRole.ADMIN];
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(CHANNEL.MESSAGE),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleMessage", null);
EventsGateway = EventsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)()
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map