import { Router } from 'express';
import NaversController from './controllers/NaversController';
import ProjectsController from './controllers/ProjectsController';
import RelProjectsNaversController from './controllers/RelProjectsNaversController';

const routes = Router();

//Routes Navers
routes.get('/navers', NaversController.index);
routes.get('/navers/:id', NaversController.show);
routes.post('/navers', NaversController.create);
routes.put('/navers/:id', NaversController.update);
routes.delete('/navers/:id', NaversController.delete);

//Routes Projects
routes.get('/projects', ProjectsController.index);
routes.get('/projects/:id', ProjectsController.show);
routes.post('/projects', ProjectsController.create);
routes.put('/projects/:id', ProjectsController.update);
routes.delete('/projects/:id', ProjectsController.delete);

//Routes Relation Projects Navers
routes.post('/relations', RelProjectsNaversController.create);
routes.put('/relations/:id', RelProjectsNaversController.update);
routes.delete('/relations/:id', RelProjectsNaversController.delete);


export default routes;