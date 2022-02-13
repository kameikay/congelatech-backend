import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomerService1644720848563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "customer_service",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "service_id",
              type: "uuid",
            },
            {
              name: "customer_id",
              type: "uuid",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            }
          ],
          foreignKeys: [
            {
              name: "FKService",
              referencedTableName: "services",
              referencedColumnNames: ["id"],
              columnNames: ["service_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            },
            {
              name: "FKCustomer",
              referencedTableName: "customers",
              referencedColumnNames: ["id"],
              columnNames: ["customer_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("customer_service")
    }

}
