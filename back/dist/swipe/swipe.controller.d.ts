import { SwipeService } from './swipe.service';
import { CreateSwipeDto } from './dto/create-swipe.dto';
import { Swipe } from './entities/swipe.entity';
import { UpdateSwipeDto } from './dto/update-swipe.dto';
export declare class SwipeController {
    private readonly SwipeService;
    constructor(SwipeService: SwipeService);
    create(dto: CreateSwipeDto): Promise<Swipe>;
    update(id: number, dto: UpdateSwipeDto): Promise<Swipe>;
    findId(token: string, user_2: number): Promise<number>;
}
