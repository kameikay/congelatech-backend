import { Outcome } from "../infra/typeorm/entities/Outcome";

export interface IOutcomesRepositoryDTO {
  service_provider_id: string;
  name: string;
  description: string;
  price: number;
}

export interface IOutcomesRepository {
  create({ service_provider_id, name, description, price }: IOutcomesRepositoryDTO): Promise<void>;
  findById(id: string): Promise<Outcome>;
}