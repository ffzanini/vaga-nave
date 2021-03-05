import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async index(request: Request, response: Response) {
    const navers = await knex('navers').select('*');

    const allNavers = navers.map(naver => {
      return {
        id: naver.id,
        name: naver.name,
        job_role: naver.job_role,
        birthdate: naver.birthdate,
        admission_date: naver.admission_date,
      }
    })

    if (!allNavers) {
      return response.status(400).json({ message: 'Nenhum Naver não encontrado' })
    }

    return response.json(allNavers);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const naver = await knex('navers').where('id', id).first();

    if (!naver) {
      return response.status(400).json({ message: 'Naver não encontrado' })
    }
    const projects = await knex('projects').join('projects_navers', 'projects.id', '=', 'projects_navers.project_id').where('projects_navers.naver_id', id).select('projects.id', 'projects.name');
    return response.status(200).json({naver, projects});
  },

  async create(request: Request, response: Response) {
    const {
      name,
      job_role,
      birthdate,
      admission_date,
      projects,
    } = request.body;

    const navers = {
      name,
      job_role,
      birthdate,
      admission_date,
    }

    const insertedIds = await knex('navers').insert(navers)
    
    
    return response.status(201).json(navers);
  },

  async update(request: Request, response: Response) {
    const {
      name,
      job_role,
      birthdate,
      admission_date,
    } = request.body;

    const navers = {
      name,
      job_role,
      birthdate,
      admission_date,
    }

    const { id } = request.params

    await knex('navers').update(navers).where({id})
    return response.status(200).json(navers);
  },

  async delete(request: Request, response: Response) {},
}
