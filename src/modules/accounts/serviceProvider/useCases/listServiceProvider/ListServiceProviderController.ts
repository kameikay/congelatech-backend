import { Request, Response } from "express";
import { container } from "tsyringe"
import { ListServiceProviderUseCase } from "./ListServiceProviderUseCase";

class ListServiceProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listServiceProviderUseCase = container.resolve(ListServiceProviderUseCase)

    const all = await listServiceProviderUseCase.execute()

    return response.json(all)
  }
}

export { ListServiceProviderController }