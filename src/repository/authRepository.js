const db = require('../database/db.js');

exports.createUser = ( email, hashPassword, valor) =>{
    const sql = "INSERT INTO usuarios( email, senha ) VALUES(?, ?)";
    db.query(sql, [ email, hashPassword], valor)
};

exports.findByLogin = ( email, valor) =>{
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    db.query(sql, [ email], valor)
}