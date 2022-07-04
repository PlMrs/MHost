import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {

    @Get()
    send(){
        return 'Hello World!';
    }
}
