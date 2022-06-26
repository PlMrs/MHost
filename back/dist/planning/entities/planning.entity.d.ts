import { User } from "src/users/entities/user.entity";
export declare class Planning {
    id: number;
    by: User;
    with: User;
    start: Date;
    end: Date;
    isValidated: Boolean;
    by_id: User;
    with_id: User;
}
