import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import projectsView from '../view/projects_view';
import Projects from '../models/Projects';

export default {
  async index(request: Request, response: Response) {
    const projectsRepository = getRepository(Projects);

    const projects = await projectsRepository.find();

    return response.status(200).json(projectsView.renderMany(projects));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projectsRepository = getRepository(Projects);

    const project = await projectsRepository.findOneOrFail(id);

    return response.status(200).json(projectsView.render(project));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      created_at,
      updated_at,
    } = request.body;
  
    const projectsRepository = getRepository(Projects);
    
    const data = {
      name,
      created_at,
      updated_at,
    }

    const schema = Yup.object().shape({ 
      name: Yup.string().required('Projeto obrigatório'),
      created_at: Yup.string().notRequired(),
      updated_at: Yup.string().notRequired()
    })

    await schema.validate(data, {
      abortEarly: false,
    });
    
    const projects = projectsRepository.create(data);
  
    await projectsRepository.save(projects);
  
    return response.status(201).json(projects);
  }
};