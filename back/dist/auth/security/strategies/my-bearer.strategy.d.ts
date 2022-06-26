import { Strategy } from "passport-jwt";
declare const MyBearerStrategy_base: new (...args: any[]) => Strategy;
export declare class MyBearerStrategy extends MyBearerStrategy_base {
    constructor();
    validate(payload: any): Promise<any>;
}
export {};
