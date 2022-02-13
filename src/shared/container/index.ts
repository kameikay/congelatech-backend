import { container } from "tsyringe"

import { ICustomerRepository } from "@modules/accounts/customer/repository/ICustomerRepository"
import { CustomerRepository } from "@modules/accounts/customer/infra/typeorm/repository/CustomerRepository"

import { IServiceProviderRepository } from "@modules/accounts/serviceProvider/repository/IServiceProvidersRepository"
import { IServicesRepository } from "@modules/services/repository/IServicesRepository"

import { ServiceProviderRepository } from "@modules/accounts/serviceProvider/infra/typeorm/repository/ServiceProviderRepository"
import { ServicesRepository } from "@modules/services/infra/typeorm/repository/ServicesRepository"

container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository)
container.registerSingleton<IServiceProviderRepository>("ServiceProviderRepository", ServiceProviderRepository)
container.registerSingleton<IServicesRepository>("ServicesRepository", ServicesRepository)