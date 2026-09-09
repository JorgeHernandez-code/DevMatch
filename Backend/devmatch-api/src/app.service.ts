import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      name: 'DevMatch API',
      version: '0.1.0',
      status: 'ok',
      docs: '/docs',
    };
  }
}
