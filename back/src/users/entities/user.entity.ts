import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {ADMIN="A",CUSTOMER="C"}

export enum UserNeeds {TRAVEL="T", HOST="H",DISCUTE="D", ALL="A"}

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
    email!: string;

    @Exclude()
    @Column({length: 255})
    password !: string;

    @ApiProperty({enum: UserRole})
    @Index()
    @Column({type:"enum", enum:UserRole, default: UserRole.CUSTOMER} )
    role!: UserRole;

    @Column({type:"enum", enum:UserNeeds, default: UserNeeds.DISCUTE})
    needs?: UserNeeds;

}
