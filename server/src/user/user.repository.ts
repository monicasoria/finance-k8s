import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { UserInsertionDto } from "./user-insertion.dto";
import { Logger } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private logger = new Logger("UserRepository");
    async insertUser(userInsertionDto: UserInsertionDto): Promise<User> {
        const user = new User();
        user.firstName = userInsertionDto.firstName;
        user.lastName = userInsertionDto.lastName;
        user.isActive = userInsertionDto.isActive;
        try {
            await user.save();
            this.logger.log(`Successfully saved user: ${user.firstName} ${user.lastName}`);
            return user;
          } catch (error) {
            this.logger.error(error);
            this.logger.error(`Failed to insert user: ${user.firstName} ${user.lastName}`);
          }
    }
    async getAllUsers(): Promise<User[]> {
      const users: User[] = await this.createQueryBuilder("allUsers")
        .getMany();
      return users;
    }
}
