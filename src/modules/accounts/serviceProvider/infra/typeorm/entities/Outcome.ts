import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("outcomes")
class Outcome {
  @PrimaryColumn()
  id: string;

  @Column()
  service_provider_id: string;
  
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @Column()
  price: number;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}

export { Outcome }