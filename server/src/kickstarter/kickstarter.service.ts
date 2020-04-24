import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KickstarterRepository } from './kickstarter.repository';
import { Kickstarter } from './kickstarter.entity';

@Injectable()
export class KickstarterService {
    constructor(
        @InjectRepository(KickstarterRepository)
        private kickstarterRepository: KickstarterRepository
    ){}
    async insertKickstarter(kickstarterInsertionDto): Promise<Kickstarter>  {
        return await this.kickstarterRepository.insertKickstarter(kickstarterInsertionDto);
    }
    async getAllKickstarters(): Promise<Kickstarter[]>  {
        return await this.kickstarterRepository.getAllKickstarters();
    }
    async updateKickstarter(updateKickstarterDto) {
        return await this.kickstarterRepository.updateKickstarter(updateKickstarterDto);
    }
    async deleteKickstarterById(kickstarterId: number){
        return await this.kickstarterRepository.deleteKickstarterById(kickstarterId);
    };
}
