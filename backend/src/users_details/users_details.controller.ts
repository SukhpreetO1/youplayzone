/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  Request,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { UsersDetailsService } from './users_details.service';

@Controller('api')
export class UsersDetailsController {
  constructor(private readonly usersDetailsService: UsersDetailsService) {}

  @Get('profile')
  async getProfile(@Request() req) {
    try {
      const user = await this.usersDetailsService.profile(req);
      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Post('additional_profile_details')
  async additionalProfileDetails(
    @Body('google_drive_link') google_drive_link: string,
    @Body('user_id') user_id: number,
  ): Promise<any> {
    try {
      const result = await this.usersDetailsService.additionalProfileDetails(
        google_drive_link,
        user_id,
      );

      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Post('profile_update')
  async profileUpdate(
    @Body('user_id') user_id: number,
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('social_platforms') social_media_platform: string[],
    @Body('password') password: string,
  ): Promise<any> {
    try {
      const result = await this.usersDetailsService.profileUpdate(
        user_id,
        name,
        username,
        email,
        social_media_platform,
        password,
      );

      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
