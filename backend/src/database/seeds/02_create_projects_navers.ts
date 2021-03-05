import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('projects_navers').insert([
    { naver_id: 1, project_id: 1},
    { naver_id: 1, project_id: 2},
    { naver_id: 1, project_id: 4},
    { naver_id: 2, project_id: 1},
    { naver_id: 2, project_id: 5},
    { naver_id: 3, project_id: 1},
    { naver_id: 3, project_id: 2},
    { naver_id: 3, project_id: 5},
    { naver_id: 4, project_id: 4},
    { naver_id: 4, project_id: 2},
    { naver_id: 5, project_id: 5},
    { naver_id: 5, project_id: 2},
  ]);
}