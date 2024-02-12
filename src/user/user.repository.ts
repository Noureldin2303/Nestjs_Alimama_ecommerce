import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
// import { CustomerService } from './customer/customer.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(user);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return newUser.save();
  }

  async findUser(email: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}
