import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './entities/messages.entity';

@Injectable()
export class MessagesService {
    constructor(@InjectRepository(Messages) private data: Repository<Messages>){}

    findAllWithId(id : number): Promise<Messages[]>{
        return this.data.find({where : {
            match_id : id
        }})
    }
}
