import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";
import { CreateOutcomeUseCase } from "./CreateOutcomeUseCase";

interface IPayload {
  sub: string;
}

class CreateOutcomeController {

  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body

    const authHeader = request.headers.authorization
    const [, token] = authHeader.split(" ")
    const { sub: service_provider_id } = verify(token, "01869d30c7d2618391d550c32a7bb4d5") as IPayload

    const createOutcomeUseCase = container.resolve(CreateOutcomeUseCase)

    await createOutcomeUseCase.execute({ service_provider_id, name, description, price })

    return response.status(201).send()
  }
}

export { CreateOutcomeController }