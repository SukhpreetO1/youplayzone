import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersLoginSignupModule } from './users_login_signup/users_login_signup.module';
import { UsersDetailsModule } from './users_details/users_details.module';
import { SupabaseModule } from './supabase/supabase.module';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [
    UsersLoginSignupModule,
    UsersDetailsModule,
    SupabaseModule,
    GoogleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
