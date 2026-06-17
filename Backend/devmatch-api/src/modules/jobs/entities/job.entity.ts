import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  externalId!: string;

  @Column()
  title!: string;

  @Column()
  company!: string;

  @Column()
  location!: string;

  @Column('text')
  description!: string;

  @Column()
  source!: string;

  @Column()
  url!: string;

  @Column({ default: true })
  remote!: boolean;

  @Column('simple-array', {
    nullable: true,
  })
  tags!: string[];

  @CreateDateColumn()
  createdAt!: Date;
}
