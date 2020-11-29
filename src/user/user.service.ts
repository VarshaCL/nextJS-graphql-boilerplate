import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql';

@Injectable()
export class UserService {
  getUsers(): [User] {
    return [
      {
        name: 'Mock Name',
      },
    ];
  }
}
