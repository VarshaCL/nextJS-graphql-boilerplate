import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export function createEntityRepositoryProvider(entity: any) {
  return {
    // how you provide the injection token in a test instance
    provide: getRepositoryToken(entity),
    // as a class value, Repository needs no generics
    useClass: Repository,
  };
}
