import { Outcome } from "../../infra/typeorm/entities/Outcome";
import { IOutcomesRepository, IOutcomesRepositoryDTO } from "../IOutcomesRepository";

class OutcomesRepositoryInMemory implements IOutcomesRepository {
  outcomes: Outcome[] = []

  async create({ service_provider_id, name, description, price }: IOutcomesRepositoryDTO): Promise<void> {
    const outcome = new Outcome();

    Object.assign(outcome, {
      service_provider_id, name, description, price
    })

    this.outcomes.push(outcome)
  }

  async findById(id: string): Promise<Outcome> {
    const outcome = this.outcomes.find(outcome => outcome.id === id)

    return outcome
  }

}

export { OutcomesRepositoryInMemory }