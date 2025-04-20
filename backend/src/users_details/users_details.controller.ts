import { Controller, Get, Request } from '@nestjs/common';
import { UsersDetailsService } from './users_details.service';

@Controller('api')
export class UsersDetailsController {
  constructor(private readonly usersDetailsService: UsersDetailsService) {}

  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersDetailsService.profile(req);
    return user;
  }
}
