# Stagehands map server

## Dependencies

- [npm](https://www.npmjs.com/)
- [go](https://golang.org/doc/install)

## Getting started 

To run the test typescript server, run the following snippet. Note that this will be intergrated with the [stagehands monorepo](https://github.com/shiukaheng/stagehands)

```sh
git clone https://github.com/ramsaycarslaw/mapserver.git
npm install
npm run dev
```

Next to run the Go file server you can run:

```sh
cd services
go run main.go
```

To specify the port the server runs on you can use 

```
PORT=8080 go run main.go
```

> Note the default is `8080

## Building the server 

To build the server you can run:

```sh
cd services
go build main.go
```

This will create an executable for your *current platform*.

## Running the server

To run the server you can run:

```sh
cd services
./mapserver
```

## Integration Guide

You can integrate the executable with other npm projects by listing go as a dependency and then using the following in `package.json`

```json
"scripts": {
  "mapserver": "cd {MAPSERVER_DIR} && go build && PORT={DESIRED_PORT} ./mapserver"
}
```

