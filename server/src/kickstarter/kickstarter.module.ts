import { Module } from '@nestjs/common';
import { KickstarterController } from './kickstarter.controller';
import { KickstarterService } from './kickstarter.service';

@Module({
  controllers: [KickstarterController],
  providers: [KickstarterService],
})
export class KickstarterModule {}
