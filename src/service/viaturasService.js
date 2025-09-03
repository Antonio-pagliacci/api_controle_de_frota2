const repo = require('../repository/viaturaRepository.js');

exports.getTodos = (callback) => repo.buscar(callback);
exports.getPorId = (id, callback) => repo.buscarPorId(id, callback);
exports.criar = (viatura, callback) => repo.inserir(viatura, callback);
exports.atualizar = (id, viatura, callback) => repo.atualizar(id, viatura, callback);
exports.deletar = (id, callback) => repo.deletar(id, callback);
