# TypeORM + TypeGraphQL
A barebones example.

### Requirements
- Node
- Docker

### Steps to run this project
1. ```npm i```
2. ```docker-compose up```
3. ```npm start```

### Notes
This project initally was bootstrapped with this command:
```bash
typeorm init --name my-typeorm-project --database mysql --express --docker
```
- Packages installed by `typeorm init` were out of date and had to be updated.
- TypeGraphQL and Apollo Server replaced the Express-based REST API.
