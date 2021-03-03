import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import relProjectsView from '../view/rel_projects_navers';
import ProjectsNavers from '../models/ProjectsNavers';

export default {
  async index(request: Request, response: Response) {
    const relNaversProjectsRepository = getRepository(ProjectsNavers);

    const projectsNavers = await relNaversProjectsRepository.find();

    return response.status(200).json(relProjectsView.renderMany(projectsNavers));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const relNaversProjectsRepository = getRepository(ProjectsNavers);

    const projectsNavers = await relNaversProjectsRepository.findOneOrFail(id);

    return response.status(200).json(relProjectsView.render(projectsNavers));
  },

  async create(request: Request, response: Response) {
    const {
      naver_id,
      project_id
    } = request.body;
  
    const relNaversProjectsRepository = getRepository(ProjectsNavers);
    
    const data = {
      naver_id,
      project_id
    }

    const schema = Yup.object().shape({ 
      naver_id: Yup.string().required('ID do colaborador obrigatório'),
      project_id: Yup.string().required('ID do projeto obrigatório'),
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const projectsNavers = relNaversProjectsRepository.create(data);
  
    await relNaversProjectsRepository.save(projectsNavers);
  
    return response.status(201).json(projectsNavers);
  }
};