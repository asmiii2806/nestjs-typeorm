import { Collection, Column, Entity, OneToOne } from "typeorm";
import { Item } from "./item.entity";
import { AbstractEntity } from "src/database/abstract.entity";
@Entity()
export class Listing extends AbstractEntity<Listing>
{

    @Column()
    description: string;

    @Column()
    rating:number;

    


}