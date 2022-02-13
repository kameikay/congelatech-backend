import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"

@Entity("services")
class Service {
  @PrimaryColumn()
  id?: string;

  @Column()
  type: string;

  @Column()
  customer_id: string;

  @Column()
  service_provider_id: string;

  @Column()
  description: string;

  @Column()
  service_address: string;

  @Column()
  air_quantity: number;

  @Column()
  price: number;

  @Column()
  is_done?: boolean;

  @CreateDateColumn()
  created_at?: Date;

  @Column()
  finished_at?: Date | null;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.is_done = false
      this.created_at = new Date()
      this.finished_at = null

    }
  }
}

export { Service }