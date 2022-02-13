import { ServiceProvider } from "../../infra/typeorm/entities/ServiceProvider";
import { ICreateServiceProviderDTO, IServiceProviderRepository } from "../IServiceProvidersRepository";

class ServiceProviderRepositoryInMemory implements IServiceProviderRepository {
  serviceProviders: ServiceProvider[] = []

  async create({ email, password, name, cpf, cnpj, phone }: ICreateServiceProviderDTO): Promise<void> {
    const service_provider = new ServiceProvider()

    Object.assign(service_provider, {
      email,
      password,
      name,
      cpf,
      cnpj,
      phone
    })

    this.serviceProviders.push(service_provider)
  }

  async list(): Promise<ServiceProvider[]> {
    return this.serviceProviders
  }

  async findByName(name: string): Promise<ServiceProvider> {
    const service_provider = this.serviceProviders.find(service_provider => service_provider.name === name)
    return service_provider
  }

  async findByEmail(email: string): Promise<ServiceProvider> {
    const service_provider = this.serviceProviders.find(service_provider => service_provider.email === email)
    return service_provider
  }

  async findById(id: string): Promise<ServiceProvider> {
    const service_provider = this.serviceProviders.find(service_provider => service_provider.id === id)
    return service_provider
  }
}

export { ServiceProviderRepositoryInMemory }