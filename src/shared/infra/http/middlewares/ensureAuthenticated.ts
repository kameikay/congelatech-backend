import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken"
import { AppError } from "@shared/errors/AppError";
import { ServiceProviderRepository } from "@modules/accounts/serviceProvider/infra/typeorm/repository/ServiceProviderRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing.", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: service_provider_id } = verify(token, "01869d30c7d2618391d550c32a7bb4d5") as IPayload

    const serviceProviderRepository = new ServiceProviderRepository()

    const service_provider = serviceProviderRepository.findById(service_provider_id)

    if (!service_provider) {
      throw new AppError("Service Provider does not exists", 401)
    }

    next()
  } catch {
    throw new AppError("Invalid token.", 401)
  }
}