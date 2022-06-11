import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Products {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column()
     description: string;

     @Column()
     price: string;
}