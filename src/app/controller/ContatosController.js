//chamamos o model/Contatos
const Contatos = require('../model/Contatos');

//e criamos uma classe ContatosController que será composta por 4 
//funções assíncronas que vão fazer nosso CRUD: 
//Create (Criação), Read (Consulta), Update (Atualização) e Delete (Destruição).
class ContatosController {
  //store faz o Create do CRUD e recebe uma req ao ser invocada e usa o método create para adicionar
  //os dados no body.
  async store(req, res) {
    const data = await Contatos.create(req.body);
    return res.json(data);
  }
  //index, que faz o Read do CRUD, recebe uma req e uma res ao ser invocada e usa o método find para 
  //adicionar buscar por tudo que há registrado em Contatos. O find nesse caso é 
  //feito sem parâmetros e por este motivo retorna tudo.
  async index(req, res) {
    const data = await Contatos.find({});
    return res.json(data);
  }
  //para o Update do CRUD usamos essa função update faz um updateOne no 
  //mongo usando os dados recebidos na req da função assíncrona.
  async update(req, res) {
    const data = await Contatos.updateOne(req.body);
    return res.json(data);
  }
  //para deletar um registro, completando nosso CRUD, usamos essa função que faz um delete no 
  //mongo usando os dados recebidos na req da função assíncrona.
  async delete(req, res) {
    const data = await Contatos.deleteOne(req.body);
    return res.json(data);
  }
}
//e no final não podemos esquecer de exportar.
module.exports = new ContatosController();