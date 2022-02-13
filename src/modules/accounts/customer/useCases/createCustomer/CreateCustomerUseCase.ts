import { inject, injectable } from "tsyringe"

import { hash } from "bcryptjs"
import { AppError } from "@shared/errors/AppError";
import { ICustomerRepository } from "../../repository/ICustomerRepository";

interface IRequest {
  email: string;
  password: string;
  name: string;
  birthday: Date;
  cpf?: string;
  cnpj?: string;
  phone: string;
  address: string;
  cep: string;
}

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository) { }

  async execute({ email, password, name, birthday, cpf, cnpj, phone, address, cep }: IRequest): Promise<void> {
    const customerAlreadyExists = await this.customerRepository.findByEmail(email)

    if (customerAlreadyExists) {
      throw new AppError("Customer already exists.", 400)
    }

    const passwordHashed = await hash(password, 8)

    this.customerRepository.create({ email, password: passwordHashed, name, birthday, cpf, cnpj, phone, address, cep })
  }

}

export { CreateCustomerUseCase }