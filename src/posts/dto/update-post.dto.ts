import { Category } from '../../category/entities/category.entity';
import { IsNotEmpty } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty()
  title: string;

  description: string;

  thumbnail: string;

  status: number;

  @IsNotEmpty()
  category: Category;
}
