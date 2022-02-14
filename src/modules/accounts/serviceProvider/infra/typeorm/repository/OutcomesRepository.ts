import { IOutcomesRepository, IOutcomesRepositoryDTO } from "@modules/accounts/serviceProvider/repository/IOutcomesRepository";
import { getRepository, Repository } from "typeorm";
import { Outcome } from "../entities/Outcome";

class OutcomesRepository implements IOutcomesRepository {
  private repository: Repository<Outcome>

  constructor() {
    this.repository = getRepository(Outcome)
  }

  async create({ service_provider_id, name, description, price }: IOutcomesRepositoryDTO): Promise<void> {
    const outcome = this.repository.create({
      service_provider_id,
      name,
      description,
      price
    })

    await this.repository.save(outcome)

  }

  async findById(id: string): Promise<Outcome> {
    const outcome = await this.repository.findOne({ id })

    return outcome
  }

}

export { OutcomesRepository }