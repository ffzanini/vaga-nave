import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class relProjectsNavers1614719798863 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'projects_navers',
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
					name: 'project_id',
					type: 'integer',
				},
				{
					name: 'naver_id',
					type: 'integer',
				},
			],
			foreignKeys: [
				{
					name: 'IdNaver',
					columnNames: ['naver_id'],
					referencedTableName: 'navers',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				{
					name: 'IdProject',
					columnNames: ['project_id'],
					referencedTableName: 'projects',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE',
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('projects_navers');
	}
}
