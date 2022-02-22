import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Customer } from "@modules/accounts/customer/infra/typeorm/entities/Customer";
import { ServiceProvider } from "@modules/accounts/serviceProvider/infra/typeorm/entities/ServiceProvider";

@Entity("services")
class Service {
  @PrimaryColumn()
  id?: string;

  @Column()
  type: string;

  @JoinColumn({
    name: "customer_id"
  })
  @ManyToOne(() => Customer)
  customer_id: Customer;

  @JoinColumn({
    name: "service_provider_id"
  })
  @ManyToOne(() => ServiceProvider)
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