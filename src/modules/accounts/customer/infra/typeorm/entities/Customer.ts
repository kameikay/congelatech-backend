import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Service } from "../../../../../services/infra/typeorm/entities/Service";

@Entity("customers")
class Customer { 
  @PrimaryColumn()
  id: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  name: string;
  
  @Column()
  birthday: Date;
  
  @Column()
  cpf?: string | null;
  
  @Column()
  cnpj?: string | null;
  
  @Column()
  phone: string;
  
  @Column()
  address: string;
  
  @Column()
  cep: string;
  
  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}

export { Customer }