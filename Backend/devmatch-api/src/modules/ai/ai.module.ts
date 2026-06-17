import { Module } from '@nestjs/common';
import { SkillExtractorService } from './skill-extractor.service';

@Module({
  providers: [SkillExtractorService],
  exports: [SkillExtractorService],
})
export class AiModule {}
