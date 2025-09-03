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

exports.buscarPorId = (id_vtr, callback) => {
  const sql = "SELECT * FROM viaturas WHERE id_vtr = ?";
  db.query(sql, [id_vtr], callback);
};

exports.atualizar = (id_vtr, viatura, callback) => {
  const { placa_vtr, marca_vtr, modelo_vtr, ano_vtr } = viatura;
  const sql =
    "UPDATE viaturas SET placa_vtr = ?, marca_vtr = ?, modelo_vtr = ?, ano_vtr = ? WHERE id_vtr = ?";
  db.query(sql, [placa_vtr, marca_vtr, modelo_vtr, ano_vtr, id_vtr], callback);
};

exports.deletar = (id_vtr, callback) => {
  const sql = "DELETE FROM viaturas WHERE id_vtr = ?";
  db.query(sql, [id_vtr], callback);
};
