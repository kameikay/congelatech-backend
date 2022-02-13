import { AppError } from "@shared/errors/AppError";
import { ServiceProviderRepositoryInMemory } from "../../repository/in-memory/ServiceProviderRepositoryInMemory"
import { ICreateServiceProviderDTO } from "../../repository/IServiceProvidersRepository";
import { CreateServiceProviderUseCase } from "../createServiceProvider/CreateServiceProviderUseCase";
import { AuthenticateServiceProvidersUseCase } from "./AuthenticateServiceProvidersUseCase"

let authenticateServiceProviderUseCase: AuthenticateServiceProvidersUseCase;
let serviceProviderRepositoryInMemory: ServiceProviderRepositoryInMemory;
let createServiceProviderUseCase: CreateServiceProviderUseCase;

describe("Authenticate Service Provider", () => {

  beforeEach(() => {
    serviceProviderRepositoryInMemory = new ServiceProviderRepositoryInMemory()
    authenticateServiceProviderUseCase = new AuthenticateServiceProvidersUseCase(serviceProviderRepositoryInMemory)
    createServiceProviderUseCase = new CreateServiceProviderUseCase(serviceProviderRepositoryInMemory)
  })

  it("should be able to authenticate an service provider", async () => {
    const service_provider: ICreateServiceProviderDTO = {
      cnpj: null,
      cpf: "CPF Test",
      email: "test@gmail.com",
      name: "Name Test",
      password: "senha123",
      phone: "Phone Test"
    }

    await createServiceProviderUseCase.execute(service_provider)

    const result = await authenticateServiceProviderUseCase.execute({
      email: service_provider.email,
      password: service_provider.password
    })

    expect(result).toHaveProperty("token")
  })

  it("should not be able to authenticate an non existent service provider", () => {
    expect(async () => {
        await authenticateServiceProviderUseCase.execute({
        email: "false@gmail.com",
        password: "falsePassword"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const service_provider: ICreateServiceProviderDTO = {
        cnpj: null,
        cpf: "CPF Test Error",
        email: "test@gmail.com",
        name: "Name Test Error",
        password: "senha123",
        phone: "Phone Test Error"
      }

      await createServiceProviderUseCase.execute(service_provider)

      await authenticateServiceProviderUseCase.execute({
        email: service_provider.email,
        password: "incorrectPassword"
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})