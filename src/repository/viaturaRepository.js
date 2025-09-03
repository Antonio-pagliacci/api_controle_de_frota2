const db = require("../database/db.js");

exports.inserir = (viatura, result) => {
  const { placa, marca, modelo, ano } = viatura;

  const sql = "INSERT INTO viaturas (placa, marca, modelo, ano) VALUES (?, ?, ?, ?)";
  db.query(sql, [placa, marca, modelo, ano], result);
};

exports.buscar = (result) => {
  const sql = "SELECT * FROM viaturas";
  db.query(sql, result);
};

exports.buscarPorId = (id, result) => {
  const sql = "SELECT * FROM viaturas WHERE id = ?";
  db.query(sql, [id], result);
};

exports.atualizar = (id, viatura, result) => {
  const { placa, marca, modelo, ano } = viatura;
  const sql =
    "UPDATE viaturas SET placa = ?, marca = ?, modelo = ?, ano = ? WHERE id = ?";
  db.query(sql, [placa, marca, modelo, ano, id], result);
};

exports.deletar = (id, result) => {
  const sql = "DELETE FROM viaturas WHERE id = ?";
  db.query(sql, [id], result);
};
