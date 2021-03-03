import { Router } from 'express';
import NaversController from './controllers/NaversController';
import ProjectsController from './controllers/ProjectsController';
import RelNaversProjectsController from './controllers/RelNaversProjectsController';

const routes = Router();

//Routes Navers
routes.get('/navers', NaversController.index);
routes.get('/navers/:id', NaversController.show);
routes.post('/navers', NaversController.create);

//Routes Projects
routes.get('/projects', ProjectsController.index);
routes.get('/projects/:id', ProjectsController.show);
routes.post('/projects', ProjectsController.create);

//Routes Relation Projects Navers
routes.get('/relations', RelNaversProjectsController.index);
routes.get('/relations/:id', RelNaversProjectsController.show);
routes.post('/relations', RelNaversProjectsController.create);

export default routes;