import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableUsers1681249127848 implements MigrationInterface {
  private userTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'registration_number',
        type: 'VARCHAR',
        length: '255',
        isUnique: true,
      },
      {
        name: 'name',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'cpf',
        type: 'VARCHAR',
        length: '255',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'position_id',
        type: 'INTEGER',
      },
      {
        name: 'last_access',
        type: 'TIMESTAMP',
        default: 'CURRENT_TIMESTAMP()',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'updated_at',
        type: 'TIMESTAMP',
        default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
      },
      {
        name: 'deleted_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
    ],
  });

  private positionIdForeignKey = new TableForeignKey({
    name: 'fk_users_position',
    columnNames: ['position_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'positions',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userTable);
    await queryRunner.createForeignKey(this.userTable, this.positionIdForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.userTable, this.positionIdForeignKey);
    await queryRunner.dropTable(this.userTable);
  }
}
