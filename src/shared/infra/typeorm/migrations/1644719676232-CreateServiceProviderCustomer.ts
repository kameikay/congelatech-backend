import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServiceProviderCustomer1644719676232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "serviceprovider_customer",
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
              name: "customer_id",
              type: "uuid",
            },
            {
              name: "service_id",
              type: "uuid",
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
            {
              name: "FKCustomer",
              referencedTableName: "customers",
              referencedColumnNames: ["id"],
              columnNames: ["customer_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            },
            {
              name: "FKService",
              referencedTableName: "services",
              referencedColumnNames: ["id"],
              columnNames: ["service_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("serviceprovider_customer")
    }

}
