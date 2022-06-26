import { UserNeeds } from "../entities/user.entity";
export declare class CreateUserDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    needs?: UserNeeds;
    picture: string;
    carte_id?: string;
    certificatScolaire: string;
}
