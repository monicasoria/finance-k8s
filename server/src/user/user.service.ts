import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserInsertionDto } from './user-insertion.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}
    async insertUser(userInsertionDto: UserInsertionDto): Promise<User>  {
        return await this.userRepository.insertUser(userInsertionDto);
    }
    async getAllUsers(): Promise<User[]>  {
        return await this.userRepository.getAllUsers();
    }
}
