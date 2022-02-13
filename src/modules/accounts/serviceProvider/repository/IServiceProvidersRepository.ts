import { ServiceProvider } from "../infra/typeorm/entities/ServiceProvider";

interface ICreateServiceProviderDTO {
  email: string;
  password: string;
  name: string;
  cpf: string | null;
  cnpj: string | null;
  phone: string;
}

interface IServiceProviderRepository {
  create({ email, password, name, cpf, cnpj, phone }: ICreateServiceProviderDTO): Promise<void>;
  list(): Promise<ServiceProvider[]>;
  findByName(name: string): Promise<ServiceProvider>;
  findByEmail(email: string): Promise<ServiceProvider>
  findById(id: string): Promise<ServiceProvider>
}

export { IServiceProviderRepository, ICreateServiceProviderDTO }