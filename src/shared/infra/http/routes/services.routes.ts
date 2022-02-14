import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";
import { ListServicesController } from "@modules/services/useCases/listServices/ListServicesController";
import { FinishServiceController } from "@modules/services/useCases/finishService/FinishServiceController";

const servicesRoutes = Router();

const createServiceController = new CreateServiceController()
const listServicesController = new ListServicesController()
const finishServiceController = new FinishServiceController()

servicesRoutes.post("/", ensureAuthenticated, createServiceController.handle)
servicesRoutes.get("/", ensureAuthenticated, listServicesController.handle)
servicesRoutes.post("/:id", ensureAuthenticated, finishServiceController.handle)

export { servicesRoutes }