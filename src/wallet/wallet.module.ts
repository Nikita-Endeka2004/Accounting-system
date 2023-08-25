import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet, Category])],
  controllers: [WalletController],
  providers: [WalletService, CategoryService]
})
export class WalletModule {}
