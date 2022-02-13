import { ServiceRepositoryInMemory } from "../../repository/in-memory/ServiceRepositoryInMemory";
import { CreateServiceUseCase } from "./CreateServiceUseCase"

let createServiceUseCase: CreateServiceUseCase;
let serviceRepositoryInMemory: ServiceRepositoryInMemory;

describe("Create service", () => {
  beforeEach(() => {
    serviceRepositoryInMemory = new ServiceRepositoryInMemory()
    createServiceUseCase = new CreateServiceUseCase(serviceRepositoryInMemory)
  })

  it("should be able to create a new service", async () => {
    const service = {
      type: "Service Test",
      description: "Service Description Test",
      air_quantity: 1,
      customer_id: "customer_id",
      price: 1,
      service_address: "Service Address Test",
      service_provider_id: "service_provider_id",
    }

    await createServiceUseCase.execute(service)

    const createdService = await serviceRepositoryInMemory.findByType(service.type)

    expect(createdService).toHaveProperty("id")
  })
})