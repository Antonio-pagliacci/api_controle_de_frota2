const db = require("../database/db.js");

exports.inserir = (viatura, callback) => {
  const { placa_vtr, marca_vtr, modelo_vtr, ano_vtr } = viatura;

  const sql = "INSERT INTO viaturas (placa_vtr, marca_vtr, modelo_vtr, ano_vtr) VALUES (?, ?, ?, ?)";
  db.query(sql, [placa_vtr, marca_vtr, modelo_vtr, ano_vtr], callback);
};

exports.buscar = (callback) => {
  const sql = "SELECT * FROM viaturas";
  db.query(sql, callback);
};

exports.buscarPorId = (id, callback) => {
  const sql = "SELECT * FROM viaturas WHERE id = ?";
  db.query(sql, [id], callback);
};

exports.atualizar = (id, viatura, callback) => {
  const { placa, marca, modelo, ano } = viatura;
  const sql =
    "UPDATE viaturas SET placa = ?, marca = ?, modelo = ?, ano = ? WHERE id = ?";
  db.query(sql, [placa, marca, modelo, ano, id], callback);
};

exports.deletar = (id, callback) => {
  const sql = "DELETE FROM viaturas WHERE id = ?";
  db.query(sql, [id], callback);
};
