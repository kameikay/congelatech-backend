import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";
import { Outcome } from "../../infra/typeorm/entities/Outcome";
import { ListOutcomesUseCase } from "./ListOutcomesUseCase";

interface IPayload {
  sub: string;
}

class ListOutcomesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authHeader = request.headers.authorization
    const [, token] = authHeader.split(" ")
    const { sub: service_provider_id } = verify(token, "01869d30c7d2618391d550c32a7bb4d5") as IPayload

    const listOutcomesUseCase = container.resolve(ListOutcomesUseCase)

    const outcomes = await listOutcomesUseCase.execute(service_provider_id)

    return response.json(outcomes)
  }
}

export { ListOutcomesController } 