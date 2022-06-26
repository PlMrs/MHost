import { Swipe } from "src/swipe/entities/swipe.entity";
import { User } from "src/users/entities/user.entity";
export declare class Messages {
    id: number;
    match_id: number;
    from: User;
    message: string;
    matchid: Swipe;
    user_1id: User;
}
