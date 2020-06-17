import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Creator } from './creator.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreatorService {
    constructor(
        @InjectRepository(Creator)
        private readonly repo: Repository<Creator>
    ) {}

    async getAllUsers() {
        return await this.repo.find();
    }
}
