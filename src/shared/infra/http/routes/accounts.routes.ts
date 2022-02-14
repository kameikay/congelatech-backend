import { Router } from "express";

import { CreateCustomerController } from "@modules/accounts/customer/useCases/createCustomer/CreateCustomerController";
import { ListCustomerController } from "@modules/accounts/customer/useCases/listCustomer/ListCustomerController";
import { CreateServiceProviderController } from "@modules/accounts/serviceProvider/useCases/createServiceProvider/CreateServiceProviderController";
import { ListServiceProviderController } from "@modules/accounts/serviceProvider/useCases/listServiceProvider/ListServiceProviderController";

const accountsRoutes = Router()

const createServiceProviderController = new CreateServiceProviderController()
const listServiceProviderController = new ListServiceProviderController()

const createCustomerController = new CreateCustomerController()
const listCustomerController = new ListCustomerController()

// Service Provider
accountsRoutes.post("/service-provider", createServiceProviderController.handle)
accountsRoutes.get("/service-provider", listServiceProviderController.handle)

// Customer
accountsRoutes.post("/customer", createCustomerController.handle)
accountsRoutes.get("/customer", listCustomerController.handle)

export { accountsRoutes }