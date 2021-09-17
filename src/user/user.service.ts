import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newProduct = await this.userRepository.save(createUserDto);
    return newProduct.id as string;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.findProduct(+id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.save(updateUserDto);
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(+id);
    if (result.affected < 1) {
      throw new NotFoundException('Could not found product.');
    }
    return { status: 200, message: 'Deleted' };
  }

  private async findProduct(id: number): Promise<User> {
    let product;
    try {
      product = await this.userRepository.findByIds([id]);
    } catch (error) {
      throw new NotFoundException('Could not found product.');
    }
    if (!product) {
      throw new NotFoundException('Could not found product.');
    }
    return product;
  }
}
