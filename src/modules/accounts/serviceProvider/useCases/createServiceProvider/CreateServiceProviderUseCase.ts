import { inject, injectable } from "tsyringe"
import { IServiceProviderRepository } from "../../repository/IServiceProvidersRepository";

import { hash } from "bcryptjs"
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  cnpj?: string;
  cpf?: string;
  name: string;
  password: string;
  phone: string;
}

@injectable()
class CreateServiceProviderUseCase {
  constructor(
    @inject("ServiceProviderRepository")
    private serviceProviderRepository: IServiceProviderRepository) { }

  async execute({ email, cnpj, cpf, name, password, phone }: IRequest) {
    const emailAlreadyExists = await this.serviceProviderRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError("E-mail already exists.", 400)
    }

    const passwordHashed = await hash(password, 8)


    await this.serviceProviderRepository.create({ email, cnpj, cpf, name, password: passwordHashed, phone })
  }
}

export { CreateServiceProviderUseCase }