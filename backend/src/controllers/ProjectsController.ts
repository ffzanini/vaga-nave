import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async index(request: Request, response: Response) {
    const { navers } = request.query

    if(navers) {
      if(navers === 'all') {
        const projects = await knex('projects').select('*');
        const navers = await knex('navers').join('projects_navers', 'navers.id', '=', 'projects_navers.naver_id').where('projects_navers.project_id', projects[0]).select('navers.name')

        const allProjects = projects.map(projects => {
          return {
            id: projects.id,
            name: projects.name,
            navers
          }
        })

        if (!allProjects) {
          return response.status(400).json({ message: 'Nenhum Projeto não encontrado' })
        }
        
        return response.status(200).json({ allProjects });

      } else if(navers === 'count') {
        response.json({message:'count'})
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
      return response.status(400).json({ message: 'Nenhum Projeto não encontrado' })
    }

    return response.json(allProjects);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projects = await knex('projects').where('id', id);
    
    if (!projects) {
      return response.status(400).json({ message: 'Projeto não encontrado' })
    }
    const navers = await knex('navers').join('projects_navers', 'navers.id', '=', 'projects_navers.naver_id').where('projects_navers.project_id', id).select('navers.id', 'navers.name');

    return response.status(200).json({projects, navers});
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
