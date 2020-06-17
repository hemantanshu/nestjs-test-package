import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatorController } from './creator.controller';
import { Creator } from './creator.entity';
import { CreatorService } from './creator.service';

@Module({
    imports: [TypeOrmModule.forFeature([Creator])],
    controllers: [CreatorController],
    providers: [CreatorService],
    exports: [CreatorService],
})
export class CreatorModule {}
