const repo = require('../repository/viaturaRepository.js');

exports.getTodos = (result) => repo.buscar(result);
exports.getPorId = (id, result) => repo.buscarPorId(id, result);
exports.criar = (viatura, result) => repo.inserir(viatura, result);
exports.atualizar = (id, viatura, result) => repo.atualizar(id, viatura, result);
exports.deletar = (id, result) => repo.deletar(id, result);
