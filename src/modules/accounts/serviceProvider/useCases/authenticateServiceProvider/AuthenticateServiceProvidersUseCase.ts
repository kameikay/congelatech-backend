import { inject, injectable } from "tsyringe";
import { IServiceProviderRepository } from "../../repository/IServiceProvidersRepository";

import { compare } from "bcryptjs"

import { sign } from "jsonwebtoken"
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string
}

interface IResponse {
  service_provider: {
    name: string;
    email: string
  };

  token: string
}

@injectable()
class AuthenticateServiceProvidersUseCase {
  constructor(
    @inject("ServiceProviderRepository")
    private serviceProviderRepository: IServiceProviderRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const service_provider = await this.serviceProviderRepository.findByEmail(email)

    if (!service_provider) {
      throw new AppError("E-mail or password incorrect.", 401)
    }

    const passwordMatch = await compare(password, service_provider.password)

    if (!passwordMatch) {
      throw new AppError("E-mail or password incorrect.", 401)
    }

    const token = sign({}, "01869d30c7d2618391d550c32a7bb4d5", {
      subject: service_provider.id,
      expiresIn: "1d"
    })

    return {
      service_provider: {
        name: service_provider.name,
        email: service_provider.email
      },
      token
    }
  }
}

export { AuthenticateServiceProvidersUseCase }