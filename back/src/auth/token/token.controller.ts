import { Controller, Get, Headers, HttpException, HttpStatus, UnauthorizedException, UseGuards } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from 'src/auth/token/dto/signin-user.dto';
import { ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('auth/token')
export class TokenController {
    constructor(
        private users: UsersService,
        private jwts: JwtService
    ){}

    @ApiOperation({description: "Authentifier un utilisateur"})
    @ApiUnauthorizedResponse({ description: "Authentification failed"})
    @ApiOkResponse({
        description: "Authentifié en tant qu'utilisateur",
        type: SignInDto
    })
    @Get()
    async signIn(@Headers("Authorization") auth : string) {
        let args = auth && auth.split(" ");
        if(args && args.length == 2 && args[0] == "Basic") {
            const credentials = Buffer.from(args[1], "base64").toString("utf8").split(":");
            const email = credentials[0];
            const password = credentials[1];
            const user = await this.users.findByEmail(email);

            if(user && await bcrypt.compare(password, user.password)){
                const cr = new SignInDto();
                cr.grant_type = "password";
                cr.scope = "*";
                cr.expires_in = "1d";
                cr.access_token = await this.jwts.sign({
                    id: user.id,
                    role: user.role
                },{
                    subject: user.email,
                    expiresIn: "1h"
                });
                return cr;
            }
            else{
                throw new HttpException('Connexion impossible, utilisateur ou mot de passe incorrect', HttpStatus.UNAUTHORIZED)
            }
        }
        throw new UnauthorizedException("Invalid or missing Basic credential ");
        
    }
}
