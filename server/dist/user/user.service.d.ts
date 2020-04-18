import { UserRepository } from './user.repository';
import { UserInsertionDto } from './user-insertion.dto';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    insertUser(userInsertionDto: UserInsertionDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
