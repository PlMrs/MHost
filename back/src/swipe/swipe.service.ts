import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { threadId } from 'worker_threads';
import { CreateSwipeDto } from './dto/create-swipe.dto';
import { Swipe } from './entities/swipe.entity';
import { User } from 'src/users/entities/user.entity';
import { UpdateSwipeDto } from './dto/update-swipe.dto';

@Injectable()
export class SwipeService {
    constructor(@InjectRepository(Swipe) private data: Repository<Swipe>){}

    create(createSwipeDto : CreateSwipeDto) : Promise<Swipe>{
        return this.data.save(createSwipeDto);
    }

    findOne(id: number) : Promise<Swipe>{
        return this.data.findOne(id)
    }

    checkSwipe(user_1 : User, user_2: User) : Promise<Swipe>{
        return this.data.findOne({where :[
            {user_1 : user_1, user_2 : user_2},
            {user_1 : user_2, user_2 : user_1}
        ]})
    }

    async update(id:number, dto: UpdateSwipeDto): Promise<Swipe>{
        let done = await this.data.update(id, dto);
        if (done.affected != 1)
            throw new NotFoundException(id)

        return this.findOne(id);
    }
}
