import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { createEntityRepositoryProvider } from '../../test/util';
import { UserEntity } from './user.entity';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, createEntityRepositoryProvider(UserEntity)],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
