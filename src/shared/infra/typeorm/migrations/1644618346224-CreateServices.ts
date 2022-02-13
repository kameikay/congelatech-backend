import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServices1644618346224 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "customer_id",
            type: "uuid"
          },
          {
            name: "service_provider_id",
            type: "uuid"
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "service_address",
            type: "varchar",
          },
          {
            name: "air_quantity",
            type: "integer",
          },
          {
            name: "price",
            type: "float",
          },
          {
            name: "is_done",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "finished_at",
            type: "timestamp",
            isNullable: true
          }
        ]
      }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("services")

  }

}
