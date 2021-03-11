//De início importamos o express, mongoose e a nossa configuração de
//conexão com o DB. 
const express = require('express');
const db = require('./database/config');
const mongoose = require('mongoose');
const serverPort = 3001

//dentro da classe APP definimos um construtor com as definições necessárias
//para o nosso servidor.
class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
    this.express.listen(serverPort, () =>
      console.log(`Sua API REST está funcionando na porta ${serverPort} `)
    );
  }
  //database invoca o método connect do mongoose passando a 
  //URI que definimos em /database/config.js.
  //no meu caso uso um MongoDB Atlas.
  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  }
  //para os middlewares invocamos o método use do express e o 
  //definimos para express.json() que nada mais é do que 
  //uma função nativa do express que faz um parse nas requisições
  //que chegam com JSON. Depois de passar por esse middleware um novo
  //objeto body é populado no request com os dados "parseados" (ou um objeto
  //vazio caso não existam dados)
  middlewares() {
    this.express.use(express.json());
  }
  //para as rotas deste App definimos que o arquivo ./routes.js deve ser usado.
  routes() {
    this.express.use(require("./routes"));
  }
}
//e no final exportamos tudo.
module.exports = new App().express;