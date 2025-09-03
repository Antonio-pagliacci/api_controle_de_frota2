const service = require('../service/motoristasService.js')

exports.inserir = (req, res) => {
  service.criar(req.body, (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao cadastrar novo motorista." });
    } else {
      res.status(201).json({
        message: "Motorista cadastrado com sucesso!",
        id: resultado.insetrId,
      });
    }
  });
};

exports.listar = (req, res) => {
  service.getTodos((erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao buscar motorista" });
    } else {
      res.json(resultado);
    }
  });
};

exports.buscarPorId = (req, res) => {
  const id = parseInt(req.params.id, 10);

  service.getPorId(id, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao buscar motorista por id:", erro);
      return res.status(500).json({ erro: "Erro ao buscar por id." });
    }

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({ erro: "Motorista não encontrado." });
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
      res.json({ message: "Motorista atualizado com sucesso." });
    }
  });
};

exports.deletar = (req, res) => {
  const { id } = req.params;
  service.deletar(id, (erro) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao deletar motorista" });
    } else {
      res.json({ message: "Motorista deletado com sucesso." });
    }
  });
};