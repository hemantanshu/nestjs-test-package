import { Controller, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Creator } from './creator.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('creator')
export class CreatorController {
  constructor(
    @InjectRepository(Creator)
    private readonly repository: Repository<Creator>,
  ) {}
  @Get('test')
  async test() {
    return await this.repository.find();
  }
}
