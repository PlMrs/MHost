import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';
export declare class MessagesService {
    private data;
    constructor(data: Repository<Messages>);
    findAllWithId(id: number): Promise<Messages[]>;
    create(dto: CreateMessageDto): Promise<any>;
}
