import { Test, TestingModule } from '@nestjs/testing';
import { UsersLoginSignupController } from './users_login_signup.controller';
import { UsersLoginSignupService } from './users_login_signup.service';

describe('UsersLoginSignupController', () => {
  let controller: UsersLoginSignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersLoginSignupController],
      providers: [UsersLoginSignupService],
    }).compile();

    controller = module.get<UsersLoginSignupController>(
      UsersLoginSignupController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
