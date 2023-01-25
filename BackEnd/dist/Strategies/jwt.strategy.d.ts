import { Strategy } from "passport-jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payLoad: any): Promise<{
        userId: any;
        email: any;
        role: any;
    }>;
}
export {};