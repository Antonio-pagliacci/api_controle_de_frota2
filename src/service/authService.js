const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const repo = require("../repository/authRepository.js");

exports.register = (email, senha, valor) => {
  bcrypt.hash(senha, 10, (erro, hash) => {
    if (erro) {
      return valor(erro);
    } else {
      repo.createUser(email, hash, valor);
    }
  });
};

exports.login = (email, senha, valor) => {
  repo.findByLogin(email, (erro, result) => {
    if (erro || result.length === 0) {
      return valor({erro:"Usuário ou senha invalidos."});
    } else {
      const user = result[0];
      bcrypt.compare(senha, user.senha, (erro, match) => {
        if (erro || !match) {
          return valor({erro:"Usuário ou senha invalidos."});
        } else {
          const token = jwt.sign(
            { id: user.id, login: user.login },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          valor(null, { token });
        }
      });
    }
  });
};
