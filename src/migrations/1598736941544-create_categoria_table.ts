import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCategoriaTable1598736941544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'categoria',
              columns: [
                  {
                      name: 'id',
                      type: 'integer',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment'
                  },
                  {
                      name: 'nome',
                      type: 'varchar'
                  },
                  {
                      name: 'created_at',
                      type: 'datetime'
                  },
                  {
                      name: 'updated_at',
                      type: 'datetime'
                  }
              ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categoria', true)
    }

}
