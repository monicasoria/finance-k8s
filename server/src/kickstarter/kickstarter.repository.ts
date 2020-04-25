import { Repository, EntityRepository } from "typeorm";
import { Kickstarter } from "./kickstarter.entity";

@EntityRepository(Kickstarter)
export class UserRepository extends Repository<Kickstarter> {
}
