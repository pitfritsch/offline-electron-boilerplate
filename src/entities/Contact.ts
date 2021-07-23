import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contacts')
class Contact {

  @PrimaryGeneratedColumn()
  contact_id: number;

  @Column("text")
  first_name: string;

  @Column("text")
  last_name: string;

  @Column("text")
  email: string;

  @Column("text")
  phone: string;

}

export { Contact }