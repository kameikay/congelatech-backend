import { inject, injectable } from "tsyringe"
import { IServicesRepository } from "../../repository/IServicesRepository"

interface IRequest {
  type: string;
  service_address: string;
  description: string;
  air_quantity: number;
  price: number;
  customer_id: string;
  service_provider_id: string;
}

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository) { }

  async execute({ service_address, air_quantity, description, price, type, customer_id, service_provider_id }: IRequest) {
    await this.servicesRepository.create({ service_address, air_quantity, description, price, type, customer_id, service_provider_id })
  }
}

export { CreateServiceUseCase }