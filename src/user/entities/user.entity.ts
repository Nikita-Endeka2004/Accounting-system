import { Category } from "src/category/entities/category.entity";
import { Wallet } from "src/wallet/entities/wallet.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @ManyToOne(() => Wallet, wallet => wallet.user)
  wallets: Wallet[]

  @ManyToOne(() => Category, category => category.user)
  categories: Category[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
