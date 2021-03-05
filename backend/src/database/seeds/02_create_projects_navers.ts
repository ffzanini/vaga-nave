import { Knex } from 'knex';

export async function seed(knex: Knex){
  return knex('projects_navers').del().then(function(){
    return knex('projects_navers').insert([
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
      { naver_id: 5, project_id: 7},
      { naver_id: 6, project_id: 6},
      { naver_id: 6, project_id: 5},
      { naver_id: 6, project_id: 3},
      { naver_id: 7, project_id: 8},
      { naver_id: 7, project_id: 2},
      { naver_id: 7, project_id: 7},
      { naver_id: 8, project_id: 7},
      { naver_id: 8, project_id: 6},
    ]);
  })
}