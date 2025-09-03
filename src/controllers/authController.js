const service = require("../service/authService.js");

exports.register = (req, res) => {
  const { login, senha } = req.body;
  service.register(login, senha, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error });
    } else {
      res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    }
  });
};

exports.login = (req, res) => {
  const { login, senha } = req.body;
  service.login(login, senha, (error, result) => {
    if (error) {
      return res.status(401).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
};
