import { getRepository } from 'typeorm'
import { User } from './entity/User'

export async function seedDatabase() {
  const userRepository = getRepository(User)

  const defaultUser = userRepository.create({
    firstName: 'Timber',
    lastName: 'Saw',
    age: 27,
  })
  await userRepository.save(defaultUser)

  const users = userRepository.create([
    {
      firstName: 'Bob',
      lastName: 'Ross',
      age: 100,
    },
    {
      firstName: 'Barack',
      lastName: 'Obama',
      age: 50,
    },
  ])
  await userRepository.save(users)

  return {
    defaultUser,
  }
}
