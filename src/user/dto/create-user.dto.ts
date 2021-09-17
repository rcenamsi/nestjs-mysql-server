import { Gender } from '../entities/user.entity';
export class CreateUserDto {
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_date: Date;
  gender: Gender;
  is_active: boolean;
}
