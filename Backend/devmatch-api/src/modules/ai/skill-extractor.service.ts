import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillExtractorService {
  private readonly skills = [
    'javascript',
    'typescript',
    'node.js',
    'node',
    'nestjs',
    'express',
    'react',
    'next.js',
    'nextjs',
    'vue',
    'angular',
    'postgresql',
    'postgres',
    'mysql',
    'mongodb',
    'docker',
    'aws',
    'azure',
    'git',
    'graphql',
    'redis',
    'python',
    'java',
  ];

  extract(text: string): string[] {
    if (!text) return [];

    const normalized = text.toLowerCase();

    return this.skills.filter((skill) => normalized.includes(skill));
  }
}
