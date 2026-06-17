import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { SkillExtractorService } from '../ai/skill-extractor.service';
import { JobsService } from '../jobs/jobs.service';

@Injectable()
export class ScrapersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jobsService: JobsService,
    private readonly skillExtractorService: SkillExtractorService,
  ) {}

  async getRemoteJobs() {
    const response = await this.httpService.axiosRef.get(
      'https://remoteok.com/api',
      {
        headers: {
          'User-Agent': 'DevMatch',
        },
      },
    );

    return response.data;
  }

  async importRemoteOkJobs() {
    const response = await this.httpService.axiosRef.get(
      'https://remoteok.com/api',
      {
        headers: {
          'User-Agent': 'DevMatch',
        },
      },
    );

    const jobs = response.data;

    let imported = 0;

    for (const job of jobs) {
      if (!job.id) continue;

      const exists = await this.jobsService.findByExternalId(String(job.id));

      if (exists) continue;

      await this.jobsService.create({
        externalId: String(job.id),
        title: job.position || 'No title',
        company: job.company || 'Unknown',
        location: job.location || 'Remote',
        description: job.description || '',
        source: 'RemoteOK',
        url: job.url,
        remote: true,
        tags: job.tags || [],
      });

      imported++;
    }

    return {
      imported,
    };
  }

  async analyzeJobs() {
    const jobs = await this.jobsService.findAllJobs();

    const results: {
      job: string;
      skills: string[];
    }[] = [];

    for (const job of jobs) {
      const detectedSkills = this.skillExtractorService.extract(
        job.description,
      );

      results.push({
        job: job.title,
        skills: detectedSkills,
      });
    }

    return {
      jobsAnalyzed: jobs.length,
      results,
    };
  }
}
