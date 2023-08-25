import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { Observable } from "rxjs";
import { CategoryService } from "src/category/category.service";
import { WalletService } from "src/wallet/wallet.service";

@Injectable()
export class AuthorGuard implements CanActivate{

  constructor(
    private readonly walletService: WalletService,
    private readonly categoryService: CategoryService
  ){
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest()
    const {id, type} = request.params
    let entity

    switch (type) {
        case 'wallet':
          entity = await this.walletService.findOne(id)
          break;

        case 'caregory':
          entity = await this.categoryService.findOne(id)
          break;
    
      default:
        throw new NotFoundException("Something went wrong...")
        break;
    }

    const user = request.user

    if(entity && user && entity.user.id === user.id){
      return true
    }
    return false
  }
}