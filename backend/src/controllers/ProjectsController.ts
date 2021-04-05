import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async index(request: Request, response: Response) {
    const { navers } = request.query

    if(navers) {
      if(navers === 'all') {
        const allNavers = await knex('navers').select('*')
        
        if (allNavers.length == 0) {
          return response.status(400).json({ message: 'Nenhum Naver encontrado' })
        }
        
        const projects = await knex.raw('SELECT projects.id, projects.name, GROUP_CONCAT(navers.name) AS navers FROM projects INNER JOIN projects_navers ON projects.id = projects_navers.project_id INNER JOIN navers ON navers.id = projects_navers.naver_id GROUP BY projects.id');

        response.status(302).json({projects})
      } else if(navers === 'count') {
        const allNavers = await knex('navers').select('*')
        
        if (allNavers.length == 0) {
          return response.status(400).json({ message: 'Nenhum Naver encontrado' })
        }

        const projects = await knex.raw('SELECT projects.id, projects.name, count(navers.name) as count_navers FROM projects INNER JOIN projects_navers ON projects.id = projects_navers.project_id INNER JOIN navers ON navers.id = projects_navers.naver_id GROUP BY projects.id');

        response.status(302).json({projects})
      }
    }

    const projects = await knex('projects').select('*');

    const allProjects = projects.map(projects => {
      return {
        id: projects.id,
        name: projects.name,
      }
    })

    if (!allProjects) {
      return response.status(400).json({ message: 'Nenhum Projeto encontrado' })
    }

    return response.status(302).json(allProjects);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projects = await knex('projects').where('id', id);
    
    if (!projects) {
      return response.status(400).json({ message: 'Projeto não encontrado' })
    }
    const navers = await knex('navers').join('projects_navers', 'navers.id', '=', 'projects_navers.naver_id').where('projects_navers.project_id', id).select('navers.id', 'navers.name');

    return response.status(302).json({projects, navers});
  },

  async create(request: Request, response: Response) {
    const {
      name,
      navers,
    } = request.body;

    const projects = {
      name,
    }

    const insertedIds = await knex('projects').insert(projects)

    const relProjects = navers.map((naver_id:number) => {
      return {
        naver_id,
        project_id: insertedIds,
      }
    })

    await knex('projects_navers').insert(relProjects);

    return response.status(201).json(projects);
  },

  async update(request: Request, response: Response) {
    const {
      name,
    } = request.body;

    const projects = {
      name,
    }

    const { id } = request.params

    const project = await knex('projects').where('id', id).first();

    if (!project) {
      return response.status(400).json({ message: 'Projeto não encontrado' })
    }

    await knex('projects').update(projects).where({id})
    return response.status(200).json(projects);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params
  
    const projects = await knex('projects').where('id', id).first();

    if (!projects) {
      return response.status(400).json({ message: 'Projeto não encontrado' })
    }

    await knex('projects').where({id}).del()
    return response.status(200).json({ message: 'Exclusão realizada com sucesso'});
  },
}
