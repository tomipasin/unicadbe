//para criar o nosso modelo começamos chamando o mongoose.
//Para quem não conhece o mongoose é um modelador para objetos mongodb
//que facilita e deixa mais simples a interface netre node e mongo.
const mongoose = require("mongoose");

//vamos chamar nosso esquema de ContatosSchema e atribuimos a essa cont 
//um new mongoose.Schema. Não vou me deter em explicar o mongoose mas se tu tiver
//dúvidas acesse https://mongoosejs.com/docs/api/schema.html#schema_Schema
//só resumirei aqui da senguinte forma: aqui definimos o "esqueleto" dos nossos dados.
const ContatosSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    entrega: {
      type: String,
      required: true
    },
    origem: {
      type: Object,
      required: true
    },
    destino: {
      type: Object,
      required: true
    }
  },
  {
    timestamps: true
  }
);

//e por fim exportamos tudo COMO UM MODEL do mongoose. Esse model nada mais é 
//que uma classe que por sua vez é a nossa forma de interagir com o MongoDB.
//na sintaxe abaixo estou exportando o modelo que criamos com ContatosSchema
//e definindo que a coleção usada deve ser contatos. Para mudar uma coleção 
//onde o modelo deve atuar mude aqui.
module.exports = mongoose.model("dados_entregas", ContatosSchema);