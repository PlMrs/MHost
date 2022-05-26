import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Swipe } from 'src/swipe/entities/swipe.entity';
import { In, Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private data: Repository<User>,
              @InjectRepository(Swipe) private swipe: Repository<Swipe>
              ){}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.data.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.data.find();
  }

  async findAllPictureNeeds(id : number): Promise<User[]>{

    let array = [];

    array.push(Number(id))

    const ids = await this.swipe.find({select : ["user_2"], where : {
      user_1 : id
    }})

    ids.map(id => array.push(id.user_2) )

    return this.data.find({select : ["id","name", "surname","needs","picture","description"],
    where : {role: Not(UserRole.ADMIN), 
              id: Not(In(array)),
            }
    })
  }

  findAllWithIds(ids : Array<number>) : Promise<User[]>{
    return this.data.find({where : { id: In(ids) }})
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
