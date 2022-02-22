import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { CreateServiceUseCase } from "./CreateServiceUseCase";

interface IPayload {
  sub: string;
}

class CreateServiceController {

  async handle(request: Request, response: Response): Promise<Response> {

    const authHeader = request.headers.authorization
    const [, token] = authHeader.split(" ")
    const { sub: service_provider_id } = verify(token, "01869d30c7d2618391d550c32a7bb4d5") as IPayload
    
    const { type, description, service_address, air_quantity, price, customer_id } = request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase)

    await createServiceUseCase.execute({ service_address, air_quantity, description, price, type, customer_id, service_provider_id })

    return response.status(201).send()
  }
}

export { CreateServiceController }