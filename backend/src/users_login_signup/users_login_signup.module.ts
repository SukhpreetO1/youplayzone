import { Module } from '@nestjs/common';
import { UsersLoginSignupService } from './users_login_signup.service';
import { UsersLoginSignupController } from './users_login_signup.controller';

@Module({
  controllers: [UsersLoginSignupController],
  providers: [UsersLoginSignupService],
})
export class UsersLoginSignupModule {}
