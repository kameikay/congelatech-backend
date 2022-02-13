import { ServiceProvider } from "../../infra/typeorm/entities/ServiceProvider";

import { inject, injectable } from "tsyringe"
import { IServiceProviderRepository } from "../../repository/IServiceProvidersRepository";

@injectable()
class ListServiceProviderUseCase {
  constructor(
    @inject("ServiceProviderRepository")
    private serviceProviderRepository: IServiceProviderRepository) {
  }

  async execute(): Promise<ServiceProvider[]> {
    const all = await this.serviceProviderRepository.list();

    return all;
  }
}

export { ListServiceProviderUseCase }