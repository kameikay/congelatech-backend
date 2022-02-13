import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateServiceController } from "@modules/services/useCases/createService/CreateServiceController";
import { ListServicesController } from "@modules/services/useCases/listServices/ListServicesController";

const servicesRoutes = Router();

const createServiceController = new CreateServiceController()
const listServicesController = new ListServicesController()

servicesRoutes.post("/", ensureAuthenticated, createServiceController.handle)
servicesRoutes.get("/", ensureAuthenticated, listServicesController.handle)

export { servicesRoutes }