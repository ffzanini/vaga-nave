import Projects from '../models/Projects';

export default {
  render(project: Projects) {
    return {
      id: project.id,
      name: project.name,
    }
  },

  renderMany(projects: Projects[]) {
    return projects.map(project => this.render(project));
  }
}