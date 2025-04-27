/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersLoginSignupService } from './users_login_signup.service';
import { users } from '@prisma/client';
import { Response } from 'express';

interface UsersWithToken extends users {
  statusCode: number;
  message: string;
  role: number;
  access_token: string;
}

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
    @Res({ passthrough: true }) res: Response,
  ): Promise<users> {
    const result: UsersWithToken = await this.usersLoginSignupService.signUp(
      name,
      username,
      email,
      social_media_platform,
      password,
    );

    if (result.statusCode === 200) {
      res.cookie('user_token', result.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 1000, // 1 hour
      });
    }

    res.status(result.statusCode);
    return result;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<users> {
    const result: UsersWithToken = await this.usersLoginSignupService.login(
      email,
      password,
    );

    if (result.statusCode === 200) {
      if (result.role === 1) {
        res.cookie('admin_token', result.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 1000,
        });
      } else if (result.role === 2) {
        res.cookie('user_token', result.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 1000,
        });
      }
    }

    res.status(result.statusCode);
    return result;
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('user_token');
    res.clearCookie('admin_token');

    return { message: 'Logged out successfully' };
  }
}
