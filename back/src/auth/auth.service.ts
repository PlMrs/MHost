import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userService: Repository<User>){}

    async validateUser(mail: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(mail);
        if(user && user.password == pass){
            const {password, ...result} = user;
            return result;
        }   
        return null;
    }
}
