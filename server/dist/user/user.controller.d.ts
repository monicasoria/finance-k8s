import { UserInsertionDto } from './user-insertion.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    insertUser(userInsertionDto: UserInsertionDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
