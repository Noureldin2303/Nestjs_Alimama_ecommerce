import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { UserService } from '../user.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { Credentials } from '../dto/credentials.dto';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { AuthorizationGuard } from '../guards/authorization.guard';

@Controller('api/v1/customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly userService: UserService,
  ) {}
  @Post('register')
  async register(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.register(createCustomerDto);
  }

  @Post('auth')
  async login(@Body() credentials: Credentials) {
    return this.userService.login(credentials);
  }

  @Roles([Role.Customer, Role.Admin])
  @Get('profile')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  async getProfile(@Req() { user }) {
    return this.customerService.findById(user._id);
  }
}
