import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {ADMIN="A",CUSTOMER="C"}

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty()
    @Column({length: 100})
    name!: string;

    @ApiProperty()
    @Column({length:100})
    surname!: string;

    @ApiProperty()
    @Column({length:300})
    mail!: string;

    @Exclude()
    @Column({length: 255})
    password !: string;

    @ApiProperty({enum: UserRole})
    @Index()
    @Column({type:"enum", enum:UserRole})
    role!: UserRole;

}
