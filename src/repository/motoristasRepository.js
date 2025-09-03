const db = require("../database/db.js");

exports.inserir = (motorista, retorno) => {
  const { nome, matricula, funcao, cnh } = motorista;
  const sql =
    "INSERT INTO motoristas (nome, matricula, funcao, cnh) values(?, ?, ?, ? )";
  db.query(sql, [nome, matricula, funcao, cnh], retorno);
};

exports.buscar = (retorno) => {
  const sql = "SELECT * FROM motoristas";
  db.query(sql, retorno);
};

exports.buscarPorId = (id, retorno) => {
  const sql = "SELECT * FROM motoristas WHERE id = ?";
  db.query(sql, [id], retorno);
};

exports.atualizar = (id, motorista, retorno) => {
  const { nome, matricula, funcao, cnh } = motorista;
  const sql =
    "UPDATE motoristas SET nome = ?, matricula = ?, funcao = ?, cnh = ?  WHERE id = ?";
  db.query(sql, [nome, matricula, funcao, cnh, id], retorno);
};

exports.deletar = (id, retorno) => {
  const sql = "DELETE FROM motoristas WHERE id = ?";
  db.query(sql, [id], retorno);
};