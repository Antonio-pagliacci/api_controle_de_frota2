const service = require("../service/viaturasService.js");

exports.inserir = (req, res) => {
  const viatura = req.body;

  if (!viatura.placa || !viatura.marca || !viatura.modelo || !viatura.ano) {
    return res.status(400).json({ erro: "Campos obrigatórios ausentes" });
  }

  service.criar(viatura, (erro, resultado) => {
    if (erro) return res.status(500).json({ erro: "Erro ao cadastrar nova viatura." });
    res.status(201).json({ message: "Viatura cadastrada com sucesso!", id: resultado.insertId });
  });
};

exports.listar = (req, res) => {
  service.getTodos((erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao buscar viatura" });
    } else {
      res.json(resultado);
    }
  });
};

exports.buscarPorId = (req, res) => {
  const id = parseInt(req.params.id, 10);

  service.getPorId(id, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao buscar viatura por id:", erro);
      return res.status(500).json({ erro: "Erro ao buscar por id." });
    }

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({ erro: "Viatura não encontrada." });
    }

    return res.status(200).json(resultado[0]);
  });
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  service.atualizar(id, req.body, (erro) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao atualizar viatura" });
    } else {
      res.json({ message: "Viatura atualizada com sucesso." });
    }
  });
};

exports.deletar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  service.deletar(id, (erro) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao deletar viatura" });
    } else {
      res.json({ message: "Viatura deletada com sucesso." });
    }
  });
};
