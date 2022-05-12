import { Controller, Get, Headers, HttpException, HttpStatus, UnauthorizedException, UseGuards } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from 'src/auth/token/dto/signin-user.dto';
import { ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

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
                cr.expires_in = "1h";
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

    /*@Get("/refresh")
    async createAccessTokenFromRefreshToken (refreshToken: string){

        try{
            const decoded: any = this.jwts.decode(refreshToken) ;
            if (!decoded) {
                throw new Error();
            }

            const user = await this.users.findByEmail(decoded.sub);
            if (!user) {
                throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
            }

            const isRefreshTokenMatching = await bcrypt.compare(refreshToken, user.refresh_token);
            if (!isRefreshTokenMatching) {
                throw new UnauthorizedException('Invalid token');
            }

            await this.jwts.verifyAsync(refreshToken, this.getRefreshTokenOptions(user));
            return this.login(user);
        }catch{
            throw new UnauthorizedException('Invalid Token');
        }
    }

    getRefreshTokenOptions(user: User): JwtSignOptions {
        return this.getTokenOptions('refresh', user);
      }
      private getTokenOptions(type: string, user: User) {
        const options: JwtSignOptions = {
          secret: process.env.REFRESH_TOKEN_SECRET,
        };
        const expiration: string = process.env.REFRESH_TOKEN_EXPIRATION;
        if (expiration) {
          options.expiresIn = expiration;
        }
        return options;
    }

    async login(user: User){
        const cr = new SignInDto();
        cr.grant_type = "password";
        cr.scope = "*";
        cr.expires_in = "1h";
        cr.access_token = await this.jwts.sign({
            id: user.id,
            role: user.role
        },{
            subject: user.email,
            expiresIn: "1h"
        });
        return cr;
    }*/

    
}
