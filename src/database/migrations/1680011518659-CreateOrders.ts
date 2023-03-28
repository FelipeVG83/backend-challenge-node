import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateOrders1680011518659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "transactionId",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "clientId",
                        type: "integer"
                    },
                    {
                        name: "productId",
                        type: "integer",
                    },
                    {
                        name: "buyingValue",
                        type: "decimal",
                        isNullable: false
                    },
                    {
                        name: "buyingQuantity",
                        type: "decimal",
                        isNullable: false
                    },
                    {
                        name: "buyingTotal",
                        type: "decimal",
                        isNullable: false
                    },
                    {
                        name: "orderDate",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            "orders",
            new TableForeignKey({
                columnNames: ["clientId"],
                referencedColumnNames: ["clientId"],
                referencedTableName: "clients",
                onDelete: "CASCADE",
            }),
        )
        await queryRunner.createForeignKey(
            "orders",
            new TableForeignKey({
                columnNames: ["productId"],
                referencedColumnNames: ["productId"],
                referencedTableName: "products",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
