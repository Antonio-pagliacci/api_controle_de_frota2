const repo = require('../repository/viaturaRepository.js');

exports.getTodos = (callback) => repo.buscar(callback);
exports.getPorId = (id_vtr, callback) => repo.buscarPorId(id_vtr, callback);
exports.criar = (viatura, callback) => repo.inserir(viatura, callback);
exports.atualizar = (id_vtr, viatura, callback) => repo.atualizar(id_vtr, viatura, callback);
exports.deletar = (id_vtr, callback) => repo.deletar(id_vtr, callback);
