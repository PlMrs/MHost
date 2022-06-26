import { User } from "src/users/entities/user.entity";
export declare class CreatePlanningDto {
    by: User;
    with: User;
    start: Date;
    end: Date;
}
