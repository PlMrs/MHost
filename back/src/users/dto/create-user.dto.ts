import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    name!: string;

    @ApiProperty()
    @IsNotEmpty()
    surname!: string;

    @ApiProperty()
    @IsEmail()
    mail!: string;

    @ApiProperty({enum: UserRole})
    @IsDefined()
    role!: UserRole;
}
