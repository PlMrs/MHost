/// <reference types="multer" />
import { HttpStatus, StreamableFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { SwipeService } from 'src/swipe/swipe.service';
export declare class UsersController {
    private readonly usersService;
    private readonly swipeService;
    constructor(usersService: UsersService, swipeService: SwipeService);
    create(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findNotSwiped(id: number, needs: string): Promise<User[]>;
    findMatched(token: string): Promise<User[]>;
    update(id: number, token: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    validateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    uploadFile(token: string, file: Express.Multer.File): Promise<string>;
    adminRemove(user: User): Promise<HttpStatus>;
    postVerifiedFiles(token: string, files: {
        carte_id: Express.Multer.File[];
        certificatScolaire: Express.Multer.File[];
    }): Promise<import("typeorm").UpdateResult>;
    getNotVerifiedUsers(): Promise<User[]>;
    returnUserFile(res: any, token: string, id: number, filename: string): "token invalide" | StreamableFile;
}
