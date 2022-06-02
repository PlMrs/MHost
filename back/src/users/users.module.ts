import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SwipeModule } from 'src/swipe/swipe.module';
import { SwipeService } from 'src/swipe/swipe.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [SwipeModule,TypeOrmModule.forFeature([User]),
  MulterModule.register({
    fileFilter: (req,file,callback)=>{
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
      }
      callback(null, true);
    },
    storage : diskStorage({
      destination : '../front/assets/images/users/picture',
      filename : (req,file,callback) => {
        const splited = file.originalname.split('.')
        const ext = splited[splited.length - 1]
        callback(null, `${uuidv4()}.${ext}`);
      }
    })
  })
],
  controllers: [UsersController],
  providers: [UsersService,SwipeService]
})
export class UsersModule {}