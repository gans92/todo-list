## Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- Execute as migrations com `npm run prisma migrate dev`
- Inicie o servidor com `npm start`


# Endpoints

## Create

`POST /todo`

    {
        "name": "Note Title",
        "status": "false"
    }

## Read

`GET /todo`

## Update

`PUT /todo`

    {
        "id": 1,
        "name": "Note Title",
        "status": "true"
    }

## Delete

`DELETE /todo/:id`
