import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDetailDto } from './create-users_detail.dto';

export class UpdateUsersDetailDto extends PartialType(CreateUsersDetailDto) {}
