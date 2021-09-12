# Serverless Challenge

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.14.14
v14.17.5
```

## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/otallyto/serverless-challenge.git
$ cd serverless-challenge
```

To install and set up the library, run:

```sh
$ npm install 
```

Or if you prefer using Yarn:

```sh
$ yarn install
```

## Usage

### Serving the app

```sh
$ npm run offline
```

### Running the tests

```sh
$ npm test
```

### Deploying the app to AWS

```sh
$ npm run deploy
```

## Testing the deployed app

- create a emplopyee in the database
```sh
curl --request POST \
  --url https://6bb5a6l1n3.execute-api.us-east-1.amazonaws.com/dev/funcionario \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Matheus",
	"idade": 24,
	"cargo": "Back-end Developer"
}'
```

- get the employee from the database

```sh
curl --request GET \
  --url https://6bb5a6l1n3.execute-api.us-east-1.amazonaws.com/dev/funcionario/d543bb7e-2615-4a50-a4d0-2b1db19e6f76
```

- update the employee in the database

```sh
curl --request PUT \
  --url https://6bb5a6l1n3.execute-api.us-east-1.amazonaws.com/dev/funcionario/d543bb7e-2615-4a50-a4d0-2b1db19e6f76 \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Matheus Silva",
	"skills": ["Super Sono", "OSU"]
}'
```

- delete the employee from the database

```sh
curl --request DELETE \
  --url https://6bb5a6l1n3.execute-api.us-east-1.amazonaws.com/dev/funcionario/d543bb7e-2615-4a50-a4d0-2b1db19e6f76
```
## Requisitos

- [x] 1. Utilizar Clean Architecture
- [x] 2. Seu desafio precisa estar versionado no Github, em um repositório público.
- [x] 3. Documentação é primordial e vamos nos guiar por ela ;)
- [x] 4. Um funcionário deve possuir como atributos : Id , Idade , Nome e Cargo<br/>
- [x] 5. Salvar as informações necessárias em um banco de dados relacional ou não relacional de sua escolha dentro de uma infraestrutura AWS<br/>
- [x] 6. Será necessário que a Lambda consiga consultar, deletar e atualizar um funcionário e que ele esteja acessível via internet.<br/>
- [x] 7. Os recuros podem ser provisionados por serveless framework ou terraform.
- [x] 8. Realizar testes unitário com JEST.

