import { Test, TestingModule } from '@nestjs/testing';
import { UsersLoginSignupService } from './users_login_signup.service';

describe('UsersLoginSignupService', () => {
  let service: UsersLoginSignupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersLoginSignupService],
    }).compile();

    service = module.get<UsersLoginSignupService>(UsersLoginSignupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
