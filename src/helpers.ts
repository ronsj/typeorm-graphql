import { getRepository } from 'typeorm'

// import { Recipe } from "../entities/recipe";
// import { Rate } from "../entities/rate";
import { User } from './entity/User'

export async function seedDatabase() {
  // const recipeRepository = getRepository(Recipe);
  // const ratingsRepository = getRepository(Rate);
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

  // const recipes = recipeRepository.create([
  //   {
  //     title: "Recipe 1",
  //     description: "Desc 1",
  //     author: defaultUser,
  //     ratings: ratingsRepository.create([
  //       { value: 2, user: defaultUser },
  //       { value: 4, user: defaultUser },
  //       { value: 5, user: defaultUser },
  //       { value: 3, user: defaultUser },
  //       { value: 4, user: defaultUser },
  //     ]),
  //   },
  //   {
  //     title: "Recipe 2",
  //     author: defaultUser,
  //     ratings: ratingsRepository.create([
  //       { value: 2, user: defaultUser },
  //       { value: 4, user: defaultUser },
  //     ]),
  //   },
  // ]);
  // await recipeRepository.save(recipes);

  return {
    defaultUser,
  }
}
