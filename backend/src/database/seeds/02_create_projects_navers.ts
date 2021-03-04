import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('projects_navers').insert([
    { navers_id: 1, project_id: 1},
    { navers_id: 1, project_id: 2},
    { navers_id: 1, project_id: 4},
    { navers_id: 2, project_id: 1},
    { navers_id: 2, project_id: 5},
    { navers_id: 3, project_id: 1},
    { navers_id: 3, project_id: 2},
    { navers_id: 3, project_id: 5},
    { navers_id: 4, project_id: 4},
    { navers_id: 4, project_id: 2},
    { navers_id: 5, project_id: 5},
    { navers_id: 5, project_id: 2},
  ]);
}