import { Request, Response } from "express";
import { ListCustomerUseCase } from "./ListCustomerUseCase";
import { container } from "tsyringe"

class ListCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCustomerUseCase = container.resolve(ListCustomerUseCase)
    
    const all = await listCustomerUseCase.execute()

    return response.json(all)
  }
}
export { ListCustomerController }