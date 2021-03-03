import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import { ProjectsNaversRepository } from '../repositories/ProjectsNaversRepository';
import relProjectsView from '../view/rel_projects_navers';


export default {
  async index(request: Request, response: Response) {
    const relNaversProjectsRepository = getCustomRepository(ProjectsNaversRepository);

    const projectsNavers = await relNaversProjectsRepository.find();

    return response.status(200).json(relProjectsView.renderMany(projectsNavers));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const relNaversProjectsRepository = getCustomRepository(ProjectsNaversRepository);

    const projectsNavers = await relNaversProjectsRepository.findOneOrFail(id);

    return response.status(200).json(relProjectsView.render(projectsNavers));
  },

  async create(request: Request, response: Response) {
    const {
      naver_id,
      project_id
    } = request.body;
  
    const relNaversProjectsRepository = getCustomRepository(ProjectsNaversRepository);
    
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
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const relNaversProjectsRepository = getCustomRepository(ProjectsNaversRepository);

    const relNaversProjectsDontExists = await relNaversProjectsRepository.findOne(id);
    
    if(!relNaversProjectsDontExists) {
      return response.status(400).json({
        error: "Relacionamento não existe!"
      }) 
    }

    await relNaversProjectsRepository.delete(id);

    return response.status(200).json( { message: "Exclusão realizada com sucesso" });
  },
};