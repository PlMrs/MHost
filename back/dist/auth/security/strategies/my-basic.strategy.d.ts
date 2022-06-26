import { UsersService } from "../../../users/users.service";
declare const MyBasicStrategy_base: new (...args: any[]) => any;
export declare class MyBasicStrategy extends MyBasicStrategy_base {
    private users;
    constructor(users: UsersService);
    validate(login: string, password: string): Promise<any>;
}
export {};
