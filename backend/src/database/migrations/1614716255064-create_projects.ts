import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProjects1614716255064 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'projects',
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
					name: 'created_at',
					type: 'timestamp',
					default: "now()"
				},
				{
					name: 'updated_at',
					type: 'date'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('projects');
	}
}
