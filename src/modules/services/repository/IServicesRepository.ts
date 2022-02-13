import { Service } from "../infra/typeorm/entities/Service";

export interface ICreateServiceDTO {
  type: string;
  description: string;
  service_address: string;
  air_quantity: number;
  price: number;
  customer_id: string;
  service_provider_id: string;
}

interface IServicesRepository {
  create({ air_quantity, description, price, service_address, type, customer_id, service_provider_id }: ICreateServiceDTO): Promise<void>;
  list(): Promise<Service[]>;
  findById(id: string): Promise<Service>;
  findByType(type: string): Promise<Service>;
}

export { IServicesRepository }