require("dotenv").config({ path: __dirname + "/../../.env" });
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

conn.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err.message);
    return;
  }
  console.log(` Conectado ao banco de dados ${process.env.DB_NAME}`);
});

module.exports = conn;
