import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Navers from './Navers';
import Projects from './Projects';

@Entity('projects_navers')
export default class ProjectsNavers {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  project_id: number;

  @ManyToOne(() => Projects)
  @JoinColumn({name: "project_id"})
  project: Projects;

  @Column()
  naver_id: number;

  @ManyToOne(() => Navers)
  @JoinColumn({name: "naver_id"})
  naver: Navers;

  @CreateDateColumn({ nullable: false, name: "created_at" })
  created_at: Date;
}