import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRpository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRpository.findOne({
      where: {
        email: createUserDto.email,
      },
    })
    if(existUser) throw new BadRequestException('This email already exist')

    const user = await this.userRpository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password)
    })
    return {user};
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
