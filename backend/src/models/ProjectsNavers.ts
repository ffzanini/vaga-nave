import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects_navers')
export default class ProjectsNavers {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  project_id: number;

  @Column()
  naver_id: number;

  @CreateDateColumn({ nullable: false, name: "created_at" })
  created_at: Date;
}