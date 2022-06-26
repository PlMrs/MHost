import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/auth/token/dto/signin-user.dto';
import { User } from 'src/users/entities/user.entity';
export declare class TokenController {
    private users;
    private jwts;
    constructor(users: UsersService, jwts: JwtService);
    signIn(auth: string): Promise<SignInDto>;
    getSession(token: string): Promise<{
        user: User;
    }>;
}
