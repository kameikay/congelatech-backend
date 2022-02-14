import { container } from "tsyringe"

import { ICustomerRepository } from "@modules/accounts/customer/repository/ICustomerRepository"
import { CustomerRepository } from "@modules/accounts/customer/infra/typeorm/repository/CustomerRepository"

import { IServiceProviderRepository } from "@modules/accounts/serviceProvider/repository/IServiceProvidersRepository"
import { ServiceProviderRepository } from "@modules/accounts/serviceProvider/infra/typeorm/repository/ServiceProviderRepository"

import { IServicesRepository } from "@modules/services/repository/IServicesRepository"
import { ServicesRepository } from "@modules/services/infra/typeorm/repository/ServicesRepository"

import { IOutcomesRepository } from "@modules/accounts/serviceProvider/repository/IOutcomesRepository"
import { OutcomesRepository } from "@modules/accounts/serviceProvider/infra/typeorm/repository/OutcomesRepository"

container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository)
container.registerSingleton<IServiceProviderRepository>("ServiceProviderRepository", ServiceProviderRepository)
container.registerSingleton<IServicesRepository>("ServicesRepository", ServicesRepository)
container.registerSingleton<IOutcomesRepository>("OutcomesRepository", OutcomesRepository)