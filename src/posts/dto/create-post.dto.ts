import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  description: string;

  thumbnail: string;

  status: number;

  user: User;

  @IsNotEmpty()
  category: Category;
}
