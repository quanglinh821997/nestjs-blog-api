import { User } from '../../user/entities/user.entity';

export class CreatePostDto {
  title: string;

  description: string;

  thumbnail: string;

  status: number;

  user: User;
}
