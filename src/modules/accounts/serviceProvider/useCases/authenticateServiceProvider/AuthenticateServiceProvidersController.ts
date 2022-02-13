import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateServiceProvidersUseCase } from "./AuthenticateServiceProvidersUseCase";

class AuthenticateServiceProvidersController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const authenticateServiceProviderUseCase = container.resolve(AuthenticateServiceProvidersUseCase)

    const authenticateInfo = await authenticateServiceProviderUseCase.execute({ email, password })

    return response.json(authenticateInfo)
  }
}

export { AuthenticateServiceProvidersController }