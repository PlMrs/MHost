import { User } from "src/users/entities/user.entity";
import { Column, Entity,  JoinColumn,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Swipe {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(()=> User, user => user.id)
    @JoinColumn({name: "user_1"})
    user_1!: User

    @ManyToOne(()=> User, user => user.id)
    @JoinColumn({name: "user_2"})
    user_2!: User

    @Column({default: false})
    isMatched?: boolean;

}
