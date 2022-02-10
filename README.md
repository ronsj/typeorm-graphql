# TypeORM + TypeGraphQL
A barebones example.

### Requirements
- Node
- Docker

### Steps to run this project
 ```bash
npm i
```
```bash
docker-compose up
```
```bash
npm start
```

### Shutting Down Docker
In your terminal, press `ctrl + c` then run this command:
```bash
docker-compose down
```
Otherwise Docker may be left silently using your port in the background.

### Notes
This project initally was bootstrapped with this command:
```bash
npx typeorm init --name my-typeorm-project --database mysql --express --docker
```
- Packages installed by `typeorm init` were out of date and had to be updated.
- TypeGraphQL and Apollo Server replaced the Express-based REST API.
