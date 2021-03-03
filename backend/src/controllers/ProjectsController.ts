import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import { ProjectsRepository } from '../repositories/ProjectsRepository';
import projectsView from '../view/projects_view';


export default {
  async index(request: Request, response: Response) {
    const projectsRepository = getCustomRepository(ProjectsRepository);

    const projects = await projectsRepository.find();

    return response.status(200).json(projectsView.renderMany(projects));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    const project = await projectsRepository.findOneOrFail(id);

    return response.status(200).json(projectsView.render(project));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      created_at,
      updated_at,
    } = request.body;
  
    const projectsRepository = getCustomRepository(ProjectsRepository);
    
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
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    const projectDontExists = await projectsRepository.findOne(id);
    
    if(!projectDontExists) {
      return response.status(400).json({
        error: "Projeto não existe!"
      }) 
    }

    await projectsRepository.delete(id);

    return response.status(200).json( { message: "Exclusão realizada com sucesso" });
  },
};