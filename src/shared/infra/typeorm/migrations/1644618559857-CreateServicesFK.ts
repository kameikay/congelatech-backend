import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateServicesFK1644618559857 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("services", new TableForeignKey({
      columnNames: ["service_provider_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "service_providers",
      onDelete: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    const foreignKeyProvider = await (await queryRunner.getTable("services")).foreignKeys.find(fk => fk.columnNames.indexOf("service_provider_id") !== -1)
    await queryRunner.dropForeignKey("services", foreignKeyProvider)

    const foreignKeyCustomer = await (await queryRunner.getTable("services")).foreignKeys.find(fk => fk.columnNames.indexOf("customer_id") !== -1)
    await queryRunner.dropForeignKey("services", foreignKeyCustomer)

  }
}
