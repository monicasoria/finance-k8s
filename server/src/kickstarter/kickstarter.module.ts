import { KickstarterService } from './kickstarter.service';
import { KickstarterController } from './kickstarter.controller';
import { KickstarterRepository } from './kickstarter.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [ KickstarterController ],
    providers: [ KickstarterService ],
    imports: [TypeOrmModule.forFeature([KickstarterRepository])]
})
export class KickstarterModule {}
