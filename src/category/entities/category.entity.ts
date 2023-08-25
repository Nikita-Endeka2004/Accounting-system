import { User } from "src/user/entities/user.entity";
import { Wallet } from "src/wallet/entities/wallet.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToOne(() => User, user => user.categories)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(() => Wallet, wallet => wallet.category)
  @JoinColumn({name: 'wallet_id'})
  wallets: Wallet[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
