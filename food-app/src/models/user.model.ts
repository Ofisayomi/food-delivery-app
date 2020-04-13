import { Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    password: string;

    
}