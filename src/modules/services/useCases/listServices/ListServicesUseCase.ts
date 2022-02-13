import { inject, injectable } from "tsyringe"
import { Service } from "../../infra/typeorm/entities/Service"
import { IServicesRepository } from "../../repository/IServicesRepository"

@injectable()
class ListServicesUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository) { }

  async execute(): Promise<Service[]> {
    const services = await this.servicesRepository.list()

    return services
  }
}

export { ListServicesUseCase }