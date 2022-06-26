import { Repository } from 'typeorm';
import { CreateSwipeDto } from './dto/create-swipe.dto';
import { Swipe } from './entities/swipe.entity';
import { User } from 'src/users/entities/user.entity';
import { UpdateSwipeDto } from './dto/update-swipe.dto';
export declare class SwipeService {
    private data;
    constructor(data: Repository<Swipe>);
    create(createSwipeDto: CreateSwipeDto): Promise<Swipe>;
    findOne(id: number): Promise<Swipe>;
    findIdWithUsers(user_1: any, user_2: any): Promise<number>;
    checkSwipe(user_1: User, user_2: User): Promise<Swipe>;
    findUsersId(id: number): Promise<Array<number>>;
    update(id: number, dto: UpdateSwipeDto): Promise<Swipe>;
}
