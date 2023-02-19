<!-- readme crud todo list -->

# Endpoints

## Create

### Request

`POST /todo`

    {
        "name": "Note Title",
        "status": "false"
    }

### Response

    {
        "id": 1,
        "name": "Note Title",
        "status": "false"
    }

## Read

### Request

`GET /todo`


### Response

    [
        {
            "id": 1,
            "name": "Note Title",
            "status": "false"
        },
        {
            "id": 2,
            "name": "Note Title",
            "status": "false"
        }
    ]

## Update

### Request

`PUT /todo`

    {
        "id": 1,
        "name": "Note Title",
        "status": "true"
    }

### Response

    {
        "id": 1,
        "name": "Note Title",
        "status": "true"
    }

## Delete

### Request

`DELETE /todo/:id`

### Response

    {
        "id": 1,
        "name": "Note Title",
        "status": "true"
    }


