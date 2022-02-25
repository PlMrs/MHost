import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({length: 255})
    password !: string;

}
