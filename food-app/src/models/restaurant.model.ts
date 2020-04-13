import { BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    location: string;
}