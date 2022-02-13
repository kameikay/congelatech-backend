import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomers1644618455480 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "birthday",
            type: "timestamp",
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: true
          },
          {
            name: "cpnj",
            type: "varchar",
            isNullable: true
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
        ]
      }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customers")

  }

}
