import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRpository: Repository<User>,
    private readonly jwtService: JwtService,
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

    const token = this.jwtService.sign({email: createUserDto.email})

    return {user, token};
  }

  async findOne(email: string){
    return await this.userRpository.findOne({where: {email}});
  }

  findAll() {
    return `       This actiofghn returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
