import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async create(request: Request, response: Response) {
    const {
      naver_id,
      project_id,
    } = request.body;

    const relProjectsNavers = {
      naver_id,
      project_id,
    }

    await knex('projects_navers').insert(relProjectsNavers)

    return response.status(201).json(relProjectsNavers);
  },

  async update(request: Request, response: Response) {
    const {
      naver_id,
      project_id,
    } = request.body;

    const relProjectsNavers = {
      naver_id,
      project_id,
    }

    const { id } = request.params

    const relProjectNaver = await knex('projects_navers').where('id', id).first();
    
    if (!relProjectNaver) {
      return response.status(400).json({ message: 'Relacionamento não encontrado' })
    }

    await knex('projects_navers').update(relProjectsNavers).where({id})
    return response.status(200).json(relProjectsNavers);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params
  
    const relProjectNaver = await knex('projects_navers').where('id', id).first();

    if (!relProjectNaver) {
      return response.status(400).json({ message: 'Relacionamento não encontrado' })
    }

    await knex('projects_navers').where({id}).del()
    return response.status(200).json({ message: 'Exclusão realizada com sucesso'});
  },
}
