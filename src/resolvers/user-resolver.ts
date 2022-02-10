import { Query, Resolver } from 'type-graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { User } from '../entity/User'

@Resolver()
export class UserResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userRepository.find()
  }
}
