const repo = require('../repository/motoristasRepository.js')


exports.getTodos = (retorno) => {
  repo.buscar(retorno);
};

exports.getPorId = (id, retorno) => {
  repo.buscarPorId(id, retorno);
};

exports.criar = (cliente, retorno) => {
  repo.inserir(cliente, retorno);
};

exports.atualizar = (id, cliente, retorno) => {
  repo.atualizar(id, cliente, retorno);
};

exports.deletar = (id, retorno) => {
  repo.deletar(id, retorno);
};