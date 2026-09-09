import { Controller, Get, Post } from '@nestjs/common';

import { ScrapersService } from './scrapers.service';

@Controller('scrapers')
export class ScrapersController {
  constructor(private readonly scrapersService: ScrapersService) {}

  @Get('remoteok')
  remoteJobs() {
    return this.scrapersService.getRemoteJobs();
  }

  @Post('remoteok/import')
  importRemoteOk() {
    return this.scrapersService.importRemoteOkJobs();
  }

  @Post('analyze')
  analyzeJobs() {
    return this.scrapersService.analyzeJobs();
  }
}
