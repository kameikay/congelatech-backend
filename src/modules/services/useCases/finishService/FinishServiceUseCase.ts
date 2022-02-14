import { ServicesRepository } from "@modules/services/infra/typeorm/repository/ServicesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class FinishServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: ServicesRepository
  ) { }

  async execute(id: string) {
    const serviceExists = await this.servicesRepository.findById(id)

    console.log(serviceExists) 

    if (!serviceExists) {
      throw new AppError("Service invalid", 404)
    }

    await this.servicesRepository.updateDate(id)
  }
}

export { FinishServiceUseCase }