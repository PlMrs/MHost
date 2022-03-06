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

/*
canActivate(context: ExecutionContext): boolean {
  const roles = this.reflector.get<string[]>('roles', context.getHandler());
  if (!roles || !roles.length)
    return false;

  // Extraction du JWT
  const request = context.switchToHttp().getRequest() as IncomingMessage;
  const auth = request.headers.authorization;
  const args = auth && auth.split(" ");
  if (args && args.length == 2 && args[0] == "Bearer") {
    const token = args[1];
    const jwts = new JwtService({ secret: process.env.JWT_SECRET||"banana"})
    const payload = jwts.decode(token) as [key:string];
    const role =  payload["role"];
    return roles.includes(role);
  } else {
    return false;
  }
}*/
