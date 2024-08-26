import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true, default: null })
  avatar: string;

  @Column({})
  email: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  status: number;

  @Column({ nullable: true, default: null })
  refresh_token: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
