import { ICreateServiceDTO, IServicesRepository } from "@modules/services/repository/IServicesRepository";
import { getRepository, Repository } from "typeorm";
import { Service } from "../entities/Service";


class ServicesRepository implements IServicesRepository {
  private repository: Repository<Service>

  constructor() {
    this.repository = getRepository(Service)
  }

  async create({ air_quantity, description, price, service_address, type, customer_id, service_provider_id }: ICreateServiceDTO): Promise<void> {
    const service = this.repository.create({
      type,
      description,
      service_address,
      air_quantity,
      price,
      is_done: false,
      customer_id,
      service_provider_id
    })

    await this.repository.save(service)
  }

  async list(): Promise<Service[]> {
    const services = await this.repository.find()

    return services
  }

  async findById(id: string): Promise<Service> {
    const service = await this.repository.findOne({ id })

    return service
  }

  async findByType(type: string): Promise<Service> {
    const service = await this.repository.findOne({ type })

    return service
  }

}

export { ServicesRepository }