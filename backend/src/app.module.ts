import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersLoginSignupModule } from './users_login_signup/users_login_signup.module';

@Module({
  imports: [UsersModule, UsersLoginSignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
