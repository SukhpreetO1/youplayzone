import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersLoginSignupService } from './users_login_signup.service';
import { users } from '@prisma/client';

@Controller('api')
export class UsersLoginSignupController {
  constructor(
    private readonly usersLoginSignupService: UsersLoginSignupService,
  ) {}

  @Post('signup')
  async signUp(
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('social_platforms') social_media_platform: string[],
    @Body('password') password: string,
  ): Promise<users> {
    return this.usersLoginSignupService.signUp(
      name,
      username,
      email,
      social_media_platform,
      password,
    );
  }

  @Get('login')
  login() {
    return 'login';
  }
}
