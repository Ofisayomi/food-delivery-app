import { BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}