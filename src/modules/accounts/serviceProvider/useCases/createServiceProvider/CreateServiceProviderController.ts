import { Request, Response } from "express";
import { CreateServiceProviderUseCase } from "./CreateServiceProviderUseCase";
import { container } from "tsyringe"


class CreateServiceProviderController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email,
      cnpj,
      cpf,
      name,
      password,
      phone
    } = request.body;

    const createServiceProviderUseCase = container.resolve(CreateServiceProviderUseCase)

    await createServiceProviderUseCase.execute({
      email,
      cnpj,
      cpf,
      name,
      password,
      phone
    })

    return response.status(201).send()
  }
}

export { CreateServiceProviderController }