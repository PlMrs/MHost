import { User } from "src/users/entities/user.entity";
export declare class CreateMessageDto {
    match_id: number;
    from: User;
    message: string;
}
