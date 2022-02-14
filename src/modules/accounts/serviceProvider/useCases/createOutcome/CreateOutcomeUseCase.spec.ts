import { OutcomesRepositoryInMemory } from "../../repository/in-memory/OutcomesRepositoryInMemory";
import { CreateOutcomeUseCase } from "./CreateOutcomeUseCase"

let createOutcomeUseCase: CreateOutcomeUseCase;
let outcomesRepositoryInMemory: OutcomesRepositoryInMemory

describe("Create Outcome", () => {
  beforeEach(() => {
    outcomesRepositoryInMemory = new OutcomesRepositoryInMemory()
    createOutcomeUseCase = new CreateOutcomeUseCase(outcomesRepositoryInMemory)
  })

  it("should be able to create an outcome", async () => {
    await createOutcomeUseCase.execute({
      service_provider_id: "b103768b-4dfa-4bd7-9ccf-4fbde9d361c9",
      name: "Victor S. Kamei Kay",
      description: "Description test",
      price: 1000
    })
  })
})