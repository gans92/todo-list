<!-- readme crud todo list -->

# Endpoints

## Create

### Request

`POST /todo`

    {
        "name": "Note Title",
        "status": "false"
    }

## Read

### Request

`GET /todo`

## Update

### Request

`PUT /todo`

    {
        "id": 1,
        "name": "Note Title",
        "status": "true"
    }

## Delete

### Request

`DELETE /todo/:id`
