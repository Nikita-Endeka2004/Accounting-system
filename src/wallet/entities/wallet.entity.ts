import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  value: number

  @ManyToOne(() => User, user => user.wallets)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(() => Category, category => category.wallets)
  @JoinColumn({name: 'category_id'})
  categories: Category

}
