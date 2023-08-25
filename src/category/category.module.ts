import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Wallet])],
  controllers: [CategoryController],
  providers: [CategoryService, WalletService]
})
export class CategoryModule {}
