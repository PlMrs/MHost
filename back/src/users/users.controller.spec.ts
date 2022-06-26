import { MulterModule } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Swipe } from 'src/swipe/entities/swipe.entity';
import { SwipeModule } from 'src/swipe/swipe.module';
import { SwipeService } from 'src/swipe/swipe.service';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwipeModule,MulterModule.register({})],
      controllers: [UsersController],
      providers: [UsersService, SwipeService
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
