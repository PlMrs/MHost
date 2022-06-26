import { Swipe } from 'src/swipe/entities/swipe.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private data;
    private swipe;
    constructor(data: Repository<User>, swipe: Repository<Swipe>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findNotSwiped(id_user: number, needs_user: string): Promise<User[]>;
    findAllWithIds(ids: Array<number>): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: User): Promise<User>;
    deletePicture(picture: string): number;
    findNotVerified(): Promise<User[]>;
}
