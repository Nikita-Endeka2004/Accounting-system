import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly WalletRepository: Repository<Wallet>
  ){}
  async create(createWalletDto: CreateWalletDto, id: number) {
    const newWallet = {
      title: createWalletDto.title,
      amount: createWalletDto.amount,
      type: createWalletDto.type,
      category: {id: +createWalletDto.category},
      user: {id}
    }

    if(!newWallet) throw new BadRequestException('Something went wrong')
    
    return await this.WalletRepository.save(newWallet)
  }

  async findAll(id: number) {
    const actions = await this.WalletRepository.find({
      where: {
        user: {id}
      },
      order: {
        id: 'DESC',
      },
    })
    return actions;
  }

  async findOne(id: number) {
    const actions = await this.WalletRepository.findOne({
      where:{
        id,
      },
      relations: {
        user: true,
        categories: true
      }
    })
    if(!actions) throw new NotFoundException('Actions not found')
    return actions;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  async remove(id: number) {
    const actions = await this.WalletRepository.findOne({
      where:{
        id,
      }
    })

    if(!actions) throw new NotFoundException('Actions not found')

    return await this.WalletRepository.delete(id)
  }

  async findAllWithPagination(id: number, page: number, limit: number){
    const actions = await this.WalletRepository.find({
      where: {
        user: {id}
      },
      relations:{
        user: true,
        categories: true
      },
      order: {
        id: 'DESC'
      },
      take: limit,
      skip: (page - 1) * limit
    })
    return actions
  }

}
