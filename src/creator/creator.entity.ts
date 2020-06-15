import { IsEmail, IsNotEmpty } from 'class-validator';
import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sys_users')
export class Creator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    created_by: number;

    @Column()
    updated_by: number;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    created_at: Date;

    /** all related methods to go below this */
}
