import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { UserRole } from "../../users/entities/user.entity";

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector){
    super();
  }
  
  handleRequest(err: any, user: any, info: any, context: any, status?: any) {
    if (!err && user) {
      const role = user.role as UserRole;
      const roles = this.reflector.get<string[]>('roles', context.getHandler());
      if (roles && roles.includes(role))
        return user;
    }
    throw err || new UnauthorizedException();
  }
}
