import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateClients1680009097587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "clientId",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "80",
                        isNullable: false
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "14",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "birthDate",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "active",
                        type: "boolean",
                        isNullable: false,
                        default: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
    }

}
