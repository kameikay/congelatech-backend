import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOutcome1644721079661 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "outcomes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "service_provider_id",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "price",
            type: "float",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "FKServiceProvider",
            referencedTableName: "service_providers",
            referencedColumnNames: ["id"],
            columnNames: ["service_provider_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
        ]
      }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("outcomes")
  }

}
