//Aqui são definidas as rotas do nosso App. Começamos por chamar o express:
const express = require("express");
//criamos uma const para as rotas e invocamso o método Router() para 
//manipular  as rotas do nosso app.
const routes = express.Router();
//chamamos o controller dos contatos, que é o exemplo de propósito  do nosso App
const ContatosController = require('./app/controller/ContatosController');
//daí criamos 2 rotas, uma para o GET e outra para o POST.
//a de get vai aguardar chamarmos por nosso servidor /contatos.
//Se tu tiver rodando localmente será algo tipo http://localhost:3001/contatos
//Isso vai chamar uma função assíncrona em ContatosController chamada index que
//por sua vez fará um find({}) em Contatos retornando todos os registros.
routes.get("/contatos", ContatosController.index);

//para o Post é mais ou menos a mesma coisa. Ele chama, em vez de index uma função 
//chamada store lá em Contatos. Ela também é assíncrona então ao receber o POST
//pega os dados da requisição e faz um create(req.body) guardando os dados no db.
routes.post("/contatos", ContatosController.store);

//para atualizar um dado do nosso db vamos usar o put, que neste caso chama
//a função update lá em ContatosController.
routes.put("/contatos", ContatosController.update);

//Para completar o nosso CRUD precisamos do D ou delete. 
//Mesmo processo: routes.delete chama a async delete lá em Contatos Controller.
routes.delete("/contatos", ContatosController.delete);

//tudo feito é só exportar.
module.exports = routes;