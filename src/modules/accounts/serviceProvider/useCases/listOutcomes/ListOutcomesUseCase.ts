import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Outcome } from "../../infra/typeorm/entities/Outcome";
import { OutcomesRepository } from "../../infra/typeorm/repository/OutcomesRepository";

@injectable()
class ListOutcomesUseCase {
  constructor(
    @inject("OutcomesRepository")
    private outcomesRepository: OutcomesRepository
  ) { }

  async execute(service_provider_id: string): Promise<Outcome[]> {
    const serviceProviderExists = this.outcomesRepository.findById(service_provider_id)

    if (!serviceProviderExists) {
      new AppError("Service Provider does not exists", 401)
    }

    return this.outcomesRepository.listAllOfThatServiceProvider(service_provider_id)
  }
}

export { ListOutcomesUseCase }