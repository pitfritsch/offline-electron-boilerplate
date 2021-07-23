import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("double")
  price: number;

}

export { Product }