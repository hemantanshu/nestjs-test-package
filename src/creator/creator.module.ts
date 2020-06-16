import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';
import { Creator } from './creator.entity';
import { CreatorController } from './creator.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Creator])],
    controllers: [CreatorController],
})
export class CreatorModule {}
