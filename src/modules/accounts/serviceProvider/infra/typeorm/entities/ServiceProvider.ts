import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("service_providers")
class ServiceProvider {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  name: string;
  
  @Column()
  cpf?: string | null;
  
  @Column()
  cnpj?: string | null;
  
  @Column()
  phone: string;
  
  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date()
    }
  }
}

export { ServiceProvider }