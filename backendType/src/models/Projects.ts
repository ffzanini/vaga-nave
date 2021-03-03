import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('projects')
export default class Projects {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @CreateDateColumn({ nullable: false, name: "created_at" })
  created_at: Date;
  @UpdateDateColumn({ nullable: false, name: "updated_at" })
  updated_at: Date;
}