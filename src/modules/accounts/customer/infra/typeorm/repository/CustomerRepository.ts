import { getRepository, Repository } from "typeorm";
import { Customer } from "../entities/Customer";
import { ICustomerRepository, ICustomerRepositoryDTO } from "../../../repository/ICustomerRepository";

class CustomerRepository implements ICustomerRepository {
  private repository: Repository<Customer>

  constructor() {
    this.repository = getRepository(Customer)
  }

  async create({ email, password, name, birthday, cpf, cnpj, phone, address, cep }: ICustomerRepositoryDTO): Promise<void> {
    const customer: Customer = await this.repository.create({ email, password, name, birthday, cpf, cnpj, phone, address, cep, })

    this.repository.save(customer)
  }

  async list(): Promise<Customer[]> {
    const all = await this.repository.find()
    return all
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.repository.findOne({ email });

    return customer;
  }

}

export { CustomerRepository }