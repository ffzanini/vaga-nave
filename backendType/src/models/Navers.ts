import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('navers')
export default class Navers {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column({ type: 'date' })
  birthdate: Date;
  @Column({ type: 'date' })
  admission_date: Date;
  @Column()
  job_role: string;
  @CreateDateColumn({ nullable: false, name: "created_at" })
  created_at: Date;
  @UpdateDateColumn({ nullable: false, name: "updated_at" })
  updated_at: Date;
}