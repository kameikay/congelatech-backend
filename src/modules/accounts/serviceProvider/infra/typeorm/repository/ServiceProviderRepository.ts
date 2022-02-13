import { ICreateServiceProviderDTO, IServiceProviderRepository } from "@modules/accounts/serviceProvider/repository/IServiceProvidersRepository";
import { getRepository, Repository } from "typeorm";
import { ServiceProvider } from "../entities/ServiceProvider";

class ServiceProviderRepository implements IServiceProviderRepository {
  private repository: Repository<ServiceProvider>

  constructor() {
    this.repository = getRepository(ServiceProvider)
  }

  async create({ email, password, name, cpf, cnpj, phone }: ICreateServiceProviderDTO): Promise<void> {
    const service_provider: ServiceProvider = this.repository.create({
      email, password, name, cpf, cnpj, phone
    })


    await this.repository.save(service_provider)
  }

  async list(): Promise<ServiceProvider[]> {
    const all = await this.repository.find()
    return all
  }

  async findByName(name: string): Promise<ServiceProvider> {
    const service_provider = await this.repository.findOne({ name })

    return service_provider
  }

  async findByEmail(email: string): Promise<ServiceProvider> {
    const service_provider = await this.repository.findOne({ email })

    return service_provider
  }

  async findById(id: string): Promise<ServiceProvider> {
    const service_provider = await this.repository.findOne({ id })

    return service_provider
  }

}

export { ServiceProviderRepository }