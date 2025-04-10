import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersLoginSignupDto } from './create-users_login_signup.dto';

export class UpdateUsersLoginSignupDto extends PartialType(CreateUsersLoginSignupDto) {}
