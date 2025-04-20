import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersLoginSignupModule } from './users_login_signup/users_login_signup.module';
import { UsersDetailsModule } from './users_details/users_details.module';

@Module({
  imports: [UsersModule, UsersLoginSignupModule, UsersDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
