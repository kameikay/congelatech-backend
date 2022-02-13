import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository, ICustomerRepositoryDTO } from "../ICustomerRepository";

class CustomerRepositoryInMemory implements ICustomerRepository {
  customers: Customer[] = []

  async create({ email, password, name, birthday, cpf, cnpj, phone, address, cep }: ICustomerRepositoryDTO): Promise<void> {
    const customer = new Customer()

    Object.assign(customer, {
      email, password, name, birthday, cpf, cnpj, phone, address, cep
    })

    this.customers.push(customer)
  }

  async list(): Promise<Customer[]> {
    const all = await this.customers

    return all
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = this.customers.find(customer => customer.email === email)

    return customer
  }

}

export { CustomerRepositoryInMemory }