## Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- Inicie o servidor com `npm start`


# Backend

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)

## Link Render 

- [Link](https://backend-todolist-c12t.onrender.com/)

## Link Postman

- [Link](https://documenter.getpostman.com/view/22369915/2s93XvWjvs)

# Frontend

## Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)

## Projeto
![Screenshot_442](https://user-images.githubusercontent.com/96514967/231570107-deb3de7c-542b-43e0-ae16-f4dc66bebb16.png)

## Endpoints

## Create

`POST /todos`

    {
        "name": "Title",
        "status": "false"
    }

## Read

`GET /todos`

## Update

`PUT /todos`

    {
        "id": 1,
        "name": "Title",
        "status": "true"
    }

## Delete

`DELETE /todos/:id`
