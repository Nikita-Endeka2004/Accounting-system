import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Req, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthorGuard } from 'src/guard/author.guard';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createWalletDto: CreateWalletDto, @Req() req) {
    return this.walletService.create(createWalletDto, +req.user.id);
  }

  @Get(':type/find')
  @UseGuards(JwtAuthGuard)
  findAllByType(@Req() req, @Param('type') type: string){
    return this.walletService.findAllByType(+req.user.id, type)
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

  @Get(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @Patch(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletService.update(+id, updateWalletDto);
  }

  @Delete(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  remove(@Param('id') id: string) {
    return this.walletService.remove(+id);
  }
}
