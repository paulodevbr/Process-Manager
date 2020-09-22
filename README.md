Process Manager
======================

Process manager is a challenge proposed by Softplan, to apply for position of [Fullstack Developer](https://github.com/provas-softplan/implementador-fullstack)

Setup
---------------------

Install the following tools, they are required to run the project:

* [Gradle](https://gradle.org/)
* [NPM](https://www.npmjs.com/)

Running the project
---------------------

Install all dependencies. In project root, run the command bellow: 

`gradle build -x test`

Run the **backend**:

`gradle bootRun`

Run the **front-end**:

`cd client && npm start`

Everything is ready, now the aplication is up and running 🚀

Access
------------
The application can be accessed in [link](http://localhost:3000)

The admin credentials are:

* email: admin@softplan.com.br 
* password: admin

Structure 
-------------
### Front-end
* **local:** /client
* **Principal Recnologia:** React
* **Outras tecnologias:** 
    - [**Redux:**](https://reactjs.org/) the project has many requirements, so the redux improve the management of data between components
    - [**Immer:**](https://github.com/immerjs/immer) makes data manipulation inside a reducer easier, and it has immutability. It is utilized inside `reducer.js` files
    - [**Redux-saga**](https://redux-saga.js.org/) is good to deal with async tasks, it is used inside `saga.js` files
    - [**React bootstrap**](https://react-bootstrap.github.io/) has components ready to use.
    - [**React boilerplate**](https://github.com/react-boilerplate/react-boilerplate) is a React project template for big projects, it has many pre-configured frameworks and a component generator to improve development speed.
    
### Back-end
* **local:** /server
* **Principal Recnologia:** Springboot
* **Outras tecnologias:** 
    - [**Hibernate:**](https://hibernate.org/) improve the development speed when developing simple operations in databases

