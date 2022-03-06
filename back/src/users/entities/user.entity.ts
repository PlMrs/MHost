import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {ADMIN="A",CUSTOMER="C"}

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    name!: string;

    @Column({length:100})
    surname!: string;

    @Column({length:300})
    mail!: string;

    @Exclude()
    @Column({length: 255})
    password !: string;

    @Index()
    @Column({type:"enum", enum:UserRole})
    role!: UserRole;

}
