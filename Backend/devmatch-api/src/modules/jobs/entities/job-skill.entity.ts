import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('job_skills')
export class JobSkill {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  jobId!: string;

  @Column()
  skillId!: string;
}
