import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { servicesRoutes } from "./services.routes";

const router = Router()

router.use("/services", servicesRoutes);
router.use("/accounts", accountsRoutes);
router.use(authenticateRoutes)

export { router }