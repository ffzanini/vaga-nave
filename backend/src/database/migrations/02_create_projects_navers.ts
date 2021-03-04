import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('projects_navers', table => {
    table.increments('id').primary();
    table.integer('navers_id').notNullable().references('id').inTable('navers').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('project_id').notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo('now()').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('projects_navers');
}