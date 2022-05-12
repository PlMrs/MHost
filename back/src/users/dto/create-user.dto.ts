import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsNotEmpty } from "class-validator";
import { UserNeeds, UserRole } from "../entities/user.entity";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    name!: string;

    @ApiProperty()
    @IsNotEmpty()
    surname!: string;

    @ApiProperty()
    @IsEmail()
    email!: string;

    @ApiProperty()
    @IsNotEmpty()
    password!: string;

    @ApiProperty({enum: UserRole})
    role!: UserRole;

    @ApiProperty({enum: UserNeeds})
    needs?: UserNeeds;
}