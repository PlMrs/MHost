import { Controller, Headers } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Messages } from './entities/messages.entity';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findMessages(@Headers("match_id") id : number): Promise<Messages[]>{
    return this.messagesService.findAllWithId(id)
  }
}
