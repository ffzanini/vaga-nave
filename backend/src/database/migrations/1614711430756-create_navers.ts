import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNavers1614711430756 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
			name: 'navers',
			columns: [
					{
						name: 'id',
						type: 'integer',
						unsigned: true,
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'birthdate',
						type: 'date',
					},
					{
						name: 'admission_date',
						type: 'date',
					},
					{
						name: 'job_role',
						type: 'varchar',
					},
					{
						name: 'created_at',
						type: 'date'
					},
					{
						name: 'updated_at',
						type: 'date'
					}
			],
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('navers');
	}

}
