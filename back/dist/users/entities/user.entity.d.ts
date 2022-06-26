export declare enum UserRole {
    ADMIN = "A",
    CUSTOMER = "C"
}
export declare enum UserNeeds {
    TRAVEL = "T",
    HOST = "H",
    DISCUTE = "D",
    ALL = "A"
}
export declare class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: UserRole;
    needs?: UserNeeds;
    picture?: string;
    description?: string;
    carte_id?: string;
    certificatScolaire?: string;
    verified: boolean;
}
