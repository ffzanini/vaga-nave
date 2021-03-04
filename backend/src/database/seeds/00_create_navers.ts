import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('navers').insert([
    { name: 'Felipe Frantz Zanini', job_role: 'Desenvolvedor Backend', birthdate: '1993-06-30', admission_date: '2021-03-15'},
    { name: 'Giulia Leitzke', job_role: 'Desenvolvedor UX/UI Designer', birthdate: '1994-08-08', admission_date: '2019-08-05'},
    { name: 'Rafael Schumacher', job_role: 'Desenvolvedor Frontend', birthdate: '1992-09-17', admission_date: '2019-12-12'},
    { name: 'Yasmin Boemeke', job_role: 'Designer', birthdate: '1991-07-11', admission_date: '2017-03-09'},
    { name: 'João Pedro Bretanha', job_role: 'CTO', birthdate: '1990-03-12', admission_date: '2016-04-01'},
  ]);
}