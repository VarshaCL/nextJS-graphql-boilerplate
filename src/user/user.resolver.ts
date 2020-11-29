import { Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  getUsers(): [User] {
    return this.userService.getUsers();
  }
}
