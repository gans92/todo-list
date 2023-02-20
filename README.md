## Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- Execute as migrations com `npm run prisma migrate dev`
- Inicie o servidor com `npm start`


## Projeto
![Screenshot_347][def]

## Endpoints

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


[def]: https://user-images.githubusercontent.com/96514967/220210812-0a28f6a0-5e17-40d1-94c1-b3a6009c2975.png