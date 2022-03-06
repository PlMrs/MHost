import { IsDefined, IsEmail, IsNotEmpty } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {
    @IsNotEmpty()
    name!: string;
    @IsNotEmpty()
    surname!: string;
    @IsEmail()
    mail!: string;
    @IsDefined()
    role!: UserRole;
}
