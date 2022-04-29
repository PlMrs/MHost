import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private data: Repository<User>){}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.data.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<User> {
    return this.data.findOneOrFail(id).catch(e => {
      throw new NotFoundException(id);
    });
  }

  findByEmail(email: string): Promise<User>{
    return this.data.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
