import 'reflect-metadata'
import { createConnection, useContainer } from 'typeorm'
// import * as express from "express";
// import * as bodyParser from "body-parser";
// import {Request, Response} from "express";
// import {Routes} from "./routes";
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { ApolloServer } from 'apollo-server'
import { User } from './entity/User'
import { seedDatabase } from './helpers'
import { UserResolver } from './resolvers/user-resolver'

export interface Context {
  user: User
}

useContainer(Container)

createConnection()
  .then(async (connection) => {
    // // create express app
    // const app = express();
    // app.use(bodyParser.json());

    // // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // // setup express app here
    // // ...

    // // start express server
    // app.listen(3000);

    // // insert new users for test
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: 'Timber',
    //     lastName: 'Saw',
    //     age: 27,
    //   })
    // )
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: 'Phantom',
    //     lastName: 'Assassin',
    //     age: 24,
    //   })
    // )

    // seed database with some data
    const { defaultUser } = await seedDatabase()

    const schema = await buildSchema({
      resolvers: [UserResolver],
      container: Container,
    })

    // create mocked context
    const context: Context = { user: defaultUser }

    // Create GraphQL server
    const server = new ApolloServer({ schema, context })

    // Start the server
    const { url } = await server.listen(4000)

    // console.log(
    //   'Express server has started on port 3000. Open http://localhost:3000/users to see results'
    // )

    console.log(`Server is running, GraphQL Playground available at ${url}`)
  })
  .catch((error) => console.log(error))
