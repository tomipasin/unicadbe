# API Rest usando MongoDB Atlas
Um modelo simples de API Rest fazendo CRUD usando Node.js, Express e MongoDB.

## O que faz?
Basicamente as quatro operações do CRUD em um banco de dados noSQL MongoDB com métodos HTTP:

<img src="https://tomipasin.com/diversos/CRUD.jpg" />
<hr/>
<img src="https://tomipasin.com/diversos/httpcrud.png" />

## Como faz?
Usei o Mongoose e express como forma de fazer o Node interagir com o Mongo.

## Como testar?
Bem, o primeiro passo é clonar esse repositório.
Feito isso use o npm para instalar as dependências que estão no package.json:

```sh
npm install
```

Também será necessário, caso tu não tenha uma instância do MongoDB Atlas ou local rodando, criar uma. Eu poderia explicar aqui mas achei melhor deixar este tutorial que explica de forma simples como fazer o processo: <a href="https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f#:~:text=Primeiro%20passo%20%C3%A9%20criar%20uma,%2C%20pois%20demora%20para%20carregar..">Clique aqui</a>. 

Depois disso é só ininciar o servidor. Por padrão deixei na porta 3001 mas isso pode ser alterado no server.js.

```sh
npm start
```

Usamos aqui o nodemon que fica verificando se há alterações no código e reinicia o servidor automaticamente.

Inicialmente tu deve editar o arquivo /src/database/config.js: 

<img src="https://tomipasin.com/diversos/configdatabase.svg" />

Feito isso tu já deve ser capaz de fazer as operações do CRUD na tua base de dados. 
O server.js é o responsável por tratar do uso do express, conectar na nossa base de dados e também trabalhar com as rotas do projeto. O código está todo comentado:

<img src="https://tomipasin.com/diversos/server.svg" />


O nosso arquivo routes.js vai tratar do roteamento de cada tipo de requisição:

<img src="https://tomipasin.com/diversos/routes.svg" />

ContatosController.js é onde determinamos as operações no MongoDB:

<img src="https://tomipasin.com/diversos/controller.svg" />

O arquivo Contatos.js tem a função de criar um schema para os nossos dados, além do model que vai determinar, dentre outras coisas, em que coleção estes dados serão inseridos:

<img src="https://tomipasin.com/diversos/contatos.svg" />

Desta forma nosso CRUD em MOngoDB usando express e mongoose está completo e você pode usar o método que preferir para fazer as requisições. Como exemplo usarei o Insomnia, mas você pode usar o Postman ou criar uma interface para isso.

### POST (CREATE):

<img src="https://tomipasin.com/diversos/POST.png" />

### GET (READ):

<img src="https://tomipasin.com/diversos/GET.png" />

### PUT (UPDATE):

<img src="https://tomipasin.com/diversos/PUT.png" />

### DELETE (DELETE):

<img src="https://tomipasin.com/diversos/DELETE.png" />


Qualquer duvida é só me chamar em tomipasin@gmail.com ou no Telegram em @tomipasin.