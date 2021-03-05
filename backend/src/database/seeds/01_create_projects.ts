import { Knex } from 'knex';

export async function seed(knex: Knex){
  return knex('projects').del().then(function(){
    return knex('projects').insert([
      { name: 'Projeto Feliz'},
      { name: 'Projeto Alegre'},
      { name: 'Projeto Bacana'},
      { name: 'Projeto Felicidade'},
      { name: 'Projeto Incrível'},
      { name: 'Projeto Blaster'},
      { name: 'Projetinho Felizinho'},
      { name: 'Projeto Migrando a Felicidade'},
    ]);
  })
  
}