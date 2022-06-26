import { Reflector } from "@nestjs/core";
declare const RolesGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class RolesGuard extends RolesGuard_base {
    private reflector;
    constructor(reflector: Reflector);
    handleRequest(err: any, user: any, info: any, context: any, status?: any): any;
}
export {};
