import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobSkill } from './entities/job-skill.entity';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    @InjectRepository(JobSkill)
    private readonly jobSkillRepository: Repository<JobSkill>,
  ) {}

  async findAll() {
    return this.jobRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findByExternalId(externalId: string) {
    return this.jobRepository.findOne({
      where: {
        externalId,
      },
    });
  }

  async create(data: Partial<Job>) {
    const job = this.jobRepository.create(data);

    return this.jobRepository.save(job);
  }

  async findAllJobs() {
    return this.jobRepository.find();
  }

  async createJobSkill(jobId: string, skillId: string) {
    return this.jobSkillRepository.save({ jobId, skillId });
  }
}
