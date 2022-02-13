import { AppError } from "@shared/errors/AppError";
import { ServiceProviderRepositoryInMemory } from "../../repository/in-memory/ServiceProviderRepositoryInMemory";
import { CreateServiceProviderUseCase } from "./CreateServiceProviderUseCase";

let createServiceProviderUseCase: CreateServiceProviderUseCase;
let serviceProviderRepositoryInMemory: ServiceProviderRepositoryInMemory;


describe("Create Service Provider", () => {
  beforeEach(() => {
    serviceProviderRepositoryInMemory = new ServiceProviderRepositoryInMemory()
    createServiceProviderUseCase = new CreateServiceProviderUseCase(serviceProviderRepositoryInMemory)
  })

  it("should be able to create a service provider", async () => {
    const service_provider = {
      email: "test@gmail.com",
      password: "senha123",
      name: "Nome Test",
      cpf: "CPF Test",
      cnpj: null,
      phone: "Phone Test"
    }

    await serviceProviderRepositoryInMemory.create(service_provider)

    const createdServiceProvider = await serviceProviderRepositoryInMemory.findByName(service_provider.name)

    expect(createdServiceProvider).toHaveProperty("id")
  })

  it("should not be able to create a service provider if email already exists", () => {
    expect(async () => {
      const service_provider = {
        email: "test@gmail.com",
        password: "senha123",
        name: "Nome Test",
        cpf: "CPF Test",
        cnpj: null,
        phone: "Phone Test"
      }

      await serviceProviderRepositoryInMemory.create(service_provider)

      await serviceProviderRepositoryInMemory.create(service_provider)

    }).rejects.toBeInstanceOf(AppError)
  })
})