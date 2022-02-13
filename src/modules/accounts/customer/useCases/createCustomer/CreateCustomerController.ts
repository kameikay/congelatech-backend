import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { container } from "tsyringe"

class CreateCustomerController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, name, birthday, cpf, cnpj, phone, address, cep } = request.body;

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase)
    
    await createCustomerUseCase.execute({ email, password, name, birthday, cpf, cnpj, phone, address, cep })

    return response.status(201).send()
  }
}

export { CreateCustomerController }