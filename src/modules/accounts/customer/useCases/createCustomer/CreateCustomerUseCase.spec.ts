import { AppError } from "@shared/errors/AppError";
import { CustomerRepositoryInMemory } from "../../repository/in-memory/CustomerRepositoryInMemory";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

let createCustomerUseCase: CreateCustomerUseCase;
let customerRepositoryInMemory: CustomerRepositoryInMemory;

describe("Create Customer", () => {
  beforeEach(() => {
    customerRepositoryInMemory = new CustomerRepositoryInMemory()
    createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory)
  })

  it("should be able to create a new customer", async () => {
    const customer = {
      email: "test@gmail.com",
      password: "test123",
      name: "Nome Test",
      birthday: new Date(),
      cpf: "11122233399",
      cnpj: null,
      phone: "44999999999",
      address: "R. Teste, 123",
      cep: "87711420"
    }

    await createCustomerUseCase.execute(customer)

    const createdCustomer = await customerRepositoryInMemory.findByEmail(customer.email)

    expect(createdCustomer).toHaveProperty("id")
  })

  it("should not be able to create a new customer with existing e-mail", async () => {

    expect(async () => {
      const customer = {
        email: "test@gmail.com",
        password: "test123",
        name: "Nome Test",
        birthday: new Date(),
        cpf: "11122233399",
        cnpj: null,
        phone: "44999999999",
        address: "R. Teste, 123",
        cep: "87711420"
      }

      await createCustomerUseCase.execute(customer)

      await createCustomerUseCase.execute(customer)
    }).rejects.toBeInstanceOf(AppError)
  })

})