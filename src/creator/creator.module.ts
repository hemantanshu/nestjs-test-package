import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';
import { Creator } from './creator.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Creator])],
    controllers: [],
})
export class CreatorModule {}
