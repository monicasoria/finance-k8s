import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { UserInsertionDto } from './user-insertion.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post("insert")
    async insertUser(@Body() userInsertionDto: UserInsertionDto): Promise<User> {
        return await this.userService.insertUser(userInsertionDto);
    }
    @Get("all")
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }
    @Put('update')
    async updateUser(@Body() userUpdateDto: UserInsertionDto): Promise<User> {
    console.log("UserController -> constructor -> userUpdateDto", userUpdateDto)
      return await this.userService.updateUser(userUpdateDto);
    }
    @Delete('/delete-by-id/:id')
    async deleteUserById(@Param('id') userId: number): Promise<DeleteResult> {
      return await this.userService.deleteUserById(userId);
    }
}
