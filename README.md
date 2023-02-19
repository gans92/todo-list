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
