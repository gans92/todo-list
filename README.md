# Case Todo-list
Nesse case você irá criar uma aplicação de lista de tarefas, onde o usuário poderá criar, editar, deletar e marcar como concluída uma tarefa.

## Requisitos

- [x] O usuário deve conseguir criar uma tarefa
- [x] O usuário deve conseguir editar uma tarefa
- [x] O usuário deve conseguir deletar uma tarefa
- [x] O usuário deve conseguir marcar uma tarefa como concluída
- [x] O usuário deve conseguir ver todas as tarefas
- [x] O usuário deve conseguir ver todas as tarefas concluídas
- [x] O usuário deve conseguir ver todas as tarefas não concluídas

## Dicas

- [x] Utilize o [React Icons](https://react-icons.github.io/react-icons/) para adicionar ícones
- [x] Utilize o [React Router Dom](https://reactrouter.com/web/guides/quick-start) para criar as rotas
- [x] Utilize o [Axios](https://axios-http.com/docs/intro) para fazer as requisições
- [x] Node.js o [Node.js](https://nodejs.org/en/) para criar o servidor
- [x] Express o [Express](https://expressjs.com/pt-br/) para criar as rotas
- [x] TypeScript o [TypeScript](https://www.typescriptlang.org/) para tipar o código
- [x] MySQL o [MySQL](https://www.mysql.com/) para criar o banco de dados


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
