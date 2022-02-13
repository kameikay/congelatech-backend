import { Service } from "../../infra/typeorm/entities/Service";
import { ICreateServiceDTO, IServicesRepository } from "../IServicesRepository";

class ServiceRepositoryInMemory implements IServicesRepository {
  services: Service[] = []

  async create({ air_quantity, description, price, service_address, type, customer_id, service_provider_id }: ICreateServiceDTO): Promise<void> {
    const service = new Service()

    Object.assign(service, {
      air_quantity, description, price, service_address, type, customer_id, service_provider_id
    })

    this.services.push(service)
  }

  async list(): Promise<Service[]> {
    const all = this.services
    return all
  }

  async findById(id: string): Promise<Service> {
    const service = this.services.find(service => service.id === id)

    return service
  }

  async findByType(type: string): Promise<Service> {
    const service = this.services.find(service => service.type === type)

    return service
  }

}

export { ServiceRepositoryInMemory }