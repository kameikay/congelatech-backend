import { Router } from "express";
import { AuthenticateServiceProvidersController } from "@modules/accounts/serviceProvider/useCases/authenticateServiceProvider/AuthenticateServiceProvidersController";

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateServiceProvidersController()

authenticateRoutes.post("/sessions", authenticateUserController.handle)

export { authenticateRoutes }