const db = require("../database/db.js");

exports.inserir = (req, res) => {
  console.log("Recebido no backend:", req.body); // 👈 TESTE AQUI
  const { placa_vtr, marca_vtr, modelo_vtr, ano_vtr } = req.body;

  if (!placa_vtr || !marca_vtr || !modelo_vtr || !ano_vtr) {
    return res.status(400).send("Campos obrigatórios ausentes");
  }

  const sql = "INSERT INTO viaturas (placa_vtr, marca_vtr, modelo_vtr, ano_vtr) VALUES (?, ?, ?, ?)";
  db.query(sql, [placa_vtr, marca_vtr, modelo_vtr, ano_vtr], (err, result) => {
    if (err) {
      console.error("Erro MySQL:", err); // 👈 VER O ERRO REAL
      return res.status(500).send("Erro ao cadastrar viatura");
    }
    res.status(201).json({ id_vtr: result.insertId, ...req.body });
  });
};

exports.buscar = (retorno) => {
  const sql = "SELECT * FROM viaturas";
  db.query(sql, retorno);
};

exports.buscarPorId = (id, retorno) => {
  const sql = "SELECT * FROM viaturas WHERE id_vtr = ?";
  db.query(sql, [id], retorno);
};

exports.atualizar = (id, viatura, retorno) => {
  const { placa_vtr, marca_vtr, modelo_vtr, ano_vtr } = viatura;
  const sql =
    "UPDATE viaturas SET placa_vtr = ?, marca_vtr = ?, modelo_vtr = ?, ano_vtr = ?  WHERE id_vtr = ?";
  db.query(sql, [placa_vtr, marca_vtr, modelo_vtr, ano_vtr, id], retorno);
};

exports.deletar = (id, retorno) => {
  const sql = "DELETE FROM viaturas WHERE id_vtr = ?";
  db.query(sql, [id], retorno);
};
