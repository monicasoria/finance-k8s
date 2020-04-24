import { Repository, EntityRepository, DeleteResult } from "typeorm";
import { Kickstarter } from "./kickstarter.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(Kickstarter)
export class KickstarterRepository extends Repository<Kickstarter> {
    private logger = new Logger("KickstarterRepository");
    async insertKickstarter(kickstarterInsertionDto): Promise<Kickstarter> {
      const kickstarter = new Kickstarter();
      return kickstarter;
    }
    async getAllKickstarters(): Promise<Kickstarter[]> {
      const kickstarters: Kickstarter[] = await this.createQueryBuilder("allKickstarters")
        .getMany();
      return kickstarters;
    }
    async updateKickstarter(updateKickstarterDto): Promise<Kickstarter> {
      return await this.save(updateKickstarterDto);
    }
    async deleteKickstarterById(kickstarterId: number): Promise<DeleteResult> {
        return await this.delete(kickstarterId);
    }
}
