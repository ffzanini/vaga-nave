import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('projects').insert([
    { name: 'Projeto Feliz'},
    { name: 'Projeto Alegre'},
    { name: 'Projeto Bacana'},
    { name: 'Projeto Felicidade'},
    { name: 'Projeto Incrível'},
  ]);
}