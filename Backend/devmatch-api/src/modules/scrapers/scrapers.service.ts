import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';

import { SkillExtractorService } from '../ai/skill-extractor.service';
import { JobsService } from '../jobs/jobs.service';

const REMOTEOK_API = 'https://remoteok.com/api';

/**
 * Shape of a single entry returned by the RemoteOK public API.
 * The first element of the response is a legal notice, not a job, so
 * every field is treated as optional.
 */
export interface RemoteOkJob {
  id?: string | number;
  position?: string;
  company?: string;
  location?: string;
  description?: string;
  url?: string;
  tags?: string[];
}

@Injectable()
export class ScrapersService {
  private readonly logger = new Logger(ScrapersService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly jobsService: JobsService,
    private readonly skillExtractorService: SkillExtractorService,
  ) {}

  private async fetchRemoteOkJobs(): Promise<RemoteOkJob[]> {
    const response = await this.httpService.axiosRef.get<RemoteOkJob[]>(
      REMOTEOK_API,
      { headers: { 'User-Agent': 'DevMatch' } },
    );

    return Array.isArray(response.data) ? response.data : [];
  }

  async getRemoteJobs(): Promise<RemoteOkJob[]> {
    return this.fetchRemoteOkJobs();
  }

  async importRemoteOkJobs(): Promise<{ imported: number; skipped: number }> {
    const jobs = await this.fetchRemoteOkJobs();

    let imported = 0;
    let skipped = 0;

    for (const job of jobs) {
      if (!job.id) {
        skipped++;
        continue;
      }

      const externalId = String(job.id);
      const exists = await this.jobsService.findByExternalId(externalId);

      if (exists) {
        skipped++;
        continue;
      }

      await this.jobsService.create({
        externalId,
        title: job.position ?? 'No title',
        company: job.company ?? 'Unknown',
        location: job.location ?? 'Remote',
        description: job.description ?? '',
        source: 'RemoteOK',
        url: job.url ?? '',
        remote: true,
        tags: job.tags ?? [],
      });

      imported++;
    }

    this.logger.log(`RemoteOK import: ${imported} new, ${skipped} skipped`);

    return { imported, skipped };
  }

  async analyzeJobs(): Promise<{
    jobsAnalyzed: number;
    results: { job: string; skills: string[] }[];
  }> {
    const jobs = await this.jobsService.findAllJobs();

    const results = jobs.map((job) => ({
      job: job.title,
      skills: this.skillExtractorService.extract(job.description),
    }));

    return { jobsAnalyzed: jobs.length, results };
  }
}
