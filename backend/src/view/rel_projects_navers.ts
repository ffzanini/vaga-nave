import ProjectsNavers from '../models/ProjectsNavers';

export default {
  render(projectNaver: ProjectsNavers) {
    return {
      id: projectNaver.id,
      naver_id: projectNaver.naver_id,
      project_id: projectNaver.project_id,
    }
  },

  renderMany(projectsNavers: ProjectsNavers[]) {
    return projectsNavers.map(projectNaver => this.render(projectNaver));
  }
}