import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import { NaversRepository } from '../repositories/NaversRepository';
import naversView from '../view/navers_view';



export default {
  async index(request: Request, response: Response) {
    const naversRepository = getCustomRepository(NaversRepository);

    const navers = await naversRepository.find();

    return response.status(200).json(naversView.renderMany(navers));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const naversRepository = getCustomRepository(NaversRepository);

    const naver = await naversRepository.findOneOrFail(id);

    return response.status(200).json(naversView.render(naver));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      birthdate,
      admission_date,
      job_role,
      created_at,
      updated_at
    } = request.body;
  
    const naversRepository = getCustomRepository(NaversRepository);
    
    const data = {
      name,
      birthdate,
      admission_date,
      job_role,
      created_at,
      updated_at
    }

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      birthdate: Yup.date().required('Data de aniversário obrigatória'),
      admission_date: Yup.date().required('Data de admissão obrigatória'),
      job_role: Yup.string().required('Cargo obrigatório'),
      created_at: Yup.string().notRequired(),
      updated_at: Yup.string().notRequired()
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const navers = naversRepository.create(data);
  
    await naversRepository.save(navers);
  
    return response.status(201).json(navers);
  }
};