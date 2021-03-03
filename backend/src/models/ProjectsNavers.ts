import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('projects_navers')
export default class ProjectsNavers {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  project_id: number;
  @Column()
  naver_id: number;
}