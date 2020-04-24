import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { KickstarterService } from './kickstarter.service';
import { Kickstarter } from './kickstarter.entity';
import { DeleteResult } from 'typeorm';

@Controller('kickstarter')
export class KickstarterController {
    constructor(private kickstarterService: KickstarterService) {}
    @Post("insert")
    async insertKickstarter(@Body() kickstarterInsertionDto): Promise<Kickstarter> {
        return await this.kickstarterService.insertKickstarter(kickstarterInsertionDto);
    }
    @Get("all")
    async getAllKickstarters(): Promise<Kickstarter[]> {
        return await this.kickstarterService.getAllKickstarters();
    }
    @Put('update')
    async updateKickstarter(@Body() kickstarterUpdateDto): Promise<Kickstarter> {
    console.log("KickstarterController -> constructor -> kickstarterUpdateDto", kickstarterUpdateDto)
      return await this.kickstarterService.updateKickstarter(kickstarterUpdateDto);
    }
    @Delete('/delete-by-id/:id')
    async deleteKickstarterById(@Param('id') kickstarterId: number): Promise<DeleteResult> {
      return await this.kickstarterService.deleteKickstarterById(kickstarterId);
    }
}