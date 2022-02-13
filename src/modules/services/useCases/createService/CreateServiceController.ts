import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, service_address, air_quantity, price, customer_id, service_provider_id } = request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase)

    await createServiceUseCase.execute({ service_address, air_quantity, description, price, type, customer_id, service_provider_id })

    return response.status(201).send()
  }
}

export { CreateServiceController }