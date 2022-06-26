import { User } from "src/users/entities/user.entity";
export declare class Swipe {
    id: number;
    user_1: User;
    user_2: User;
    user_1id: User;
    user_2id: User;
    isMatched?: boolean;
}
