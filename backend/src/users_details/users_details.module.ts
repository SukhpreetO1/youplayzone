import { Module } from '@nestjs/common';
import { UsersDetailsService } from './users_details.service';
import { UsersDetailsController } from './users_details.controller';

@Module({
  controllers: [UsersDetailsController],
  providers: [UsersDetailsService],
})
export class UsersDetailsModule {}
