import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Req, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createWalletDto: CreateWalletDto, @Req() req) {
    return this.walletService.create(createWalletDto, +req.user.id);
  }

  @Get('pagination')
  @UseGuards(JwtAuthGuard)
  findAllWithPagination(@Req() req, @Query('page') page: number = 1, @Query('limit') limit: number = 3){
    return this.walletService.findAllWithPagination(+req.user.id, +page, +limit)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.walletService.findAll(+req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletService.update(+id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletService.remove(+id);
  }
}
