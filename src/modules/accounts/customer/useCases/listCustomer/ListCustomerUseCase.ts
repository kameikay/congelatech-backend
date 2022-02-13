import { CustomerRepository } from "../../infra/typeorm/repository/CustomerRepository"
import { inject, injectable } from "tsyringe"

@injectable()
class ListCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: CustomerRepository) {}

  async execute() {
    return await this.customerRepository.list()
  }

}

export { ListCustomerUseCase }