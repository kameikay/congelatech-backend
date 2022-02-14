import { inject, injectable } from "tsyringe";
import { IOutcomesRepository } from "../../repository/IOutcomesRepository";

interface IRequest {
  service_provider_id: string;
  name: string;
  description: string;
  price: number;
}

@injectable()
class CreateOutcomeUseCase {
  constructor(
    @inject("OutcomesRepository")
    private outcomesRepository: IOutcomesRepository
  ) {}

  async execute({ service_provider_id, name, description, price }: IRequest): Promise<void> {
    await this.outcomesRepository.create({ service_provider_id, name, description, price })
  }
}

export { CreateOutcomeUseCase }