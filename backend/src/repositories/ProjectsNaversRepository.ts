import { EntityRepository, Repository } from "typeorm";
import ProjectsNavers from "../models/ProjectsNavers";

@EntityRepository(ProjectsNavers)
class ProjectsNaversRepository extends Repository<ProjectsNavers> {}

export { ProjectsNaversRepository };
