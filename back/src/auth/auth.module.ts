import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [AuthService]
})
export class AuthModule {}
