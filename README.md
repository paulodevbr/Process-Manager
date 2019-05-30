Process Manager
======================
Process manager é um desafio proposto pela softplan para a vaga de [implementador fullstack](https://github.com/provas-softplan/implementador-fullstack)

Configuração
---------------------

Para executar o projeto, é necessário instalar as seguintes ferramentas:

* [Gradle](https://gradle.org/)
* [NPM](https://www.npmjs.com/)

Executando o projeto
---------------------

Primeiramente deve-se instalar todas as dependências. Na pasta raiz do projeto, execute na linha de comando:

`gradle build -x test`

Para executar o **backend**:

`gradle bootRun`

Para executar o **front-end**:

`cd client && npm start`

Tudo pronto! Agora a aplicação está rodando

Acesso
------------
A aplicação pode ser acessada neste [link](http://localhost:3000)

As credenciais de administrador são:

* email: admin@softplan.com.br 
* senha: admin

Estrutura 
-------------
### Front-end
* **local:** /client
* **Principal Recnologia:** React
* **Outras tecnologias:** 
    - [**Redux:**](https://reactjs.org/) o projeto tem um grande escopo, logo o redux facilita na manipulação de dados entre componentes
    - [**Immer:**](https://github.com/immerjs/immer) facilita na manipulação de dados dentro de um reducer, e ainda mantendo a imutabilidade. É utilizado dentro dos `reducer.js`
    - [**Redux-saga**](https://redux-saga.js.org/) facilita ao lidar com tarefas assíncronas, é utizado nas `saga.js`
    - [**React bootstrap**](https://react-bootstrap.github.io/) possui componentes de interface prontos assim como o bootstrap comum, porém prontos para serem usados no React
    - [**React boilerplate**](https://github.com/react-boilerplate/react-boilerplate) é um template em React para projetos robustos, possui diversos frameworks pré-configurados e um gerador de componentes para melhorar a velocidade do desenvolvimento 
    
### Back-end
* **local:** /server
* **Principal Recnologia:** Springboot
* **Outras tecnologias:** 
    - [**Hibernate:**](https://hibernate.org/) o hibernate melhora a velocidade ao implementar operações mais simples em bancos de dados


