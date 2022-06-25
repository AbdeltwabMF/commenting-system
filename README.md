<h1 align="center">Commenting System</h1>

<p align="center">A simple commenting and rating system</p>

## Development

- Start the development server:

```sh
git clone https://github.com/AbdeltwabMF/commenting-system.git
cd commenting-system
docker-compose up --build --force-recreate -d
npm run knex:migrate:latest
npm run knex:seed:run
```

And then navigate to the development server `http://localhost:3000`.

If you need to access the Postgres CLI:

```sh
docker exec -it commenting-system-postgres-1 psql -U postgres
```

- Shutdown the development server:

```sh
docker-compose down
```


## License

Licensed under the [GPLv3](LICENSE) License.
