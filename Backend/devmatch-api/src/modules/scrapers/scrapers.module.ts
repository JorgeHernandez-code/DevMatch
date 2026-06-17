import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ScrapersController } from './scrapers.controller';
import { ScrapersService } from './scrapers.service';

import { JobsModule } from '../jobs/jobs.module';

import { AiModule } from '../ai/ai.module';

@Module({
  imports: [HttpModule, JobsModule, AiModule],
  controllers: [ScrapersController],
  providers: [ScrapersService],
})
export class ScrapersModule {}
