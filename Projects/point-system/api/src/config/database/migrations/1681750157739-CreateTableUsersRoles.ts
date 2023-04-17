import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableUsersRoles1681750157739 implements MigrationInterface {
  private usersRolesTable = new Table({
    name: 'users_roles',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'INTEGER',
      },
      {
        name: 'role_id',
        type: 'INTEGER',
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

  private userForeignKey = new TableForeignKey({
    name: 'fk_users_roles_user_id',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });

  private roleForeignKey = new TableForeignKey({
    name: 'fk_users_roles_role_id',
    columnNames: ['role_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'roles',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.usersRolesTable);
    await queryRunner.createForeignKeys(this.usersRolesTable, [this.userForeignKey, this.roleForeignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.usersRolesTable, [this.userForeignKey, this.roleForeignKey]);
    await queryRunner.dropTable(this.usersRolesTable);
  }
}
