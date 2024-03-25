# Docker

> Spin up local psql instance via docker in any project (assumes docker desktop/docker cli are installed)

## Dockerize psql locally

1. create env vars to use for Docker:

   ```.env example
   DB_HOST=localhost
   DB_NAME=dbNameHere
   DB_PASSWORD=passwordForDB
   DB_PORT=5555
   DB_USER=dbNameApp

   DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public
   ```

2. create a `docker-compose.yml` file at the root of the project

3. use image from the docker docks, i used this one

- [link to docker psql](https://hub.docker.com/_/postgres)

  ```
  version: '3.9'

  services:
      db:
          image: postgres:16
          restart: always
          shm_size: 128mb
          environment:
              POSTGRES_USER: ${DB_USER}
              POSTGRES_PASSWORD: ${DB_PASSWORD}
              POSTGRES_DB: ${DB_NAME}
          ports:
              - ${DB_PORT}:5432
          volumes:
              - ./docker-data/db:/var/lib/postgresql/data
  ```

4. > **Caution:** I had errors spinning up my DB if my env var DB_PORT was the same as the port written in the `docker-compose.yml` file. AKA DB_PORT !== 5432

5. spin up the container with `$ docker compose up`

---

## View psql DB inside of the docker container:

```.bash
$ docker ps // grab the 'container_name_or_id'

$ docker exec -it container_name_or_id psql -U ${DB_USER} -d ${DB_NAME}
```

- After running the above commands you should have some sort of psql DB initialized

- Next steps: Use an ORM or something to create tables and/or seed data
