import { CreateMessageDto } from './dto/create-message.dto';
import { Messages } from './entities/messages.entity';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findMessages(id: number): Promise<Messages[]>;
    createMessage(dto: CreateMessageDto): Promise<Messages>;
}
