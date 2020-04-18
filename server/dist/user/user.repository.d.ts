import { Repository } from "typeorm";
import { User } from "./user.entity";
import { UserInsertionDto } from "./user-insertion.dto";
export declare class UserRepository extends Repository<User> {
    private logger;
    insertUser(userInsertionDto: UserInsertionDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
