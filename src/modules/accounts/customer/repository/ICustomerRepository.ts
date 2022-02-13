import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerRepositoryDTO {
  email: string;
  password: string;
  name: string;
  birthday: Date;
  cpf?: string;
  cnpj?: string;
  phone: string;
  address: string;
  cep: string;
}

interface ICustomerRepository {
  create({ email,
    password,
    name,
    birthday,
    cpf,
    cnpj,
    phone,
    address,
    cep }: ICustomerRepositoryDTO): Promise<void>;

  list(): Promise<Customer[]>;
  
  findByEmail(email: string): Promise<Customer>
}

export { ICustomerRepository, ICustomerRepositoryDTO }