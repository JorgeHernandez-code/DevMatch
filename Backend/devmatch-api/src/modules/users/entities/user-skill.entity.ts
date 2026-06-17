import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_skills')
export class UserSkill {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userId!: string;

  @Column()
  skillId!: string;
}
