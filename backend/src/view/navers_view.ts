import Navers from '../models/Navers';

export default {
  render(naver: Navers) {
    return {
      id: naver.id,
      name: naver.name,
      birthdate: naver.birthdate,
      admission_date: naver.admission_date,
      job_role: naver.job_role,
    }
  },

  renderMany(navers: Navers[]) {
    return navers.map(naver => this.render(naver));
  }
}