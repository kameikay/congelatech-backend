import { CreateOutcomeController } from "@modules/accounts/serviceProvider/useCases/createOutcome/CreateOutcomeController"
import { ListOutcomesController } from "@modules/accounts/serviceProvider/useCases/listOutcomes/ListOutcomesController"
import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const outcomesRoutes = Router()

const createOutcomesController = new CreateOutcomeController()
const listOutcomesController = new ListOutcomesController()


outcomesRoutes.post("/", ensureAuthenticated, createOutcomesController.handle)
outcomesRoutes.get("/", ensureAuthenticated, listOutcomesController.handle)

export { outcomesRoutes }
