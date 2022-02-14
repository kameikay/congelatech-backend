import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { parse } from "uuid";
import { FinishServiceUseCase } from "./FinishServiceUseCase";

class FinishServiceController {

  handle(request: Request, response: Response) {
    const { id } = request.params

    if (!parse(id)) throw new AppError("Invalid UUID", 400)

    const finishServiceUseCase = container.resolve(FinishServiceUseCase)

    finishServiceUseCase.execute(id)

    return response.status(204).json({ message: "Service updated " })
  }
}

export { FinishServiceController }