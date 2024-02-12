import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Credentials } from './dto/credentials.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async findUser(email: string) {
    const user = await this.userRepository.findUser(email);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async login(credentials: Credentials) {
    const user = await this.userRepository.findUser(credentials.email);

    if (!user) {
      return new UnauthorizedException();
    }

    if (!bcrypt.compare(credentials.password, user.password)) {
      return new UnauthorizedException();
    }

    const payload = {
      email: user.email,
      _id: user._id,
      role: user.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
    };
  }
}
