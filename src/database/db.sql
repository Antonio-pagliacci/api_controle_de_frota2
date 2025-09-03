-- Criação do banco de dados
CREATE DATABASE controle_de_frota;

-- Selecionar o banco de dados
USE controle_de_frota;

-- Tabela viaturas
CREATE TABLE viaturas (
    id_vtr INT AUTO_INCREMENT PRIMARY KEY,
    placa_vtr VARCHAR(10) NOT NULL,
    marca_vtr VARCHAR(50) NOT NULL,
    modelo_vtr VARCHAR(50) NOT NULL,
    ano_vtr INT NOT NULL
);

-- Tabela motoristas
CREATE TABLE motoristas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(20) NOT NULL UNIQUE,
    funcao VARCHAR(50),
    cnh VARCHAR(20) NOT NULL
);

-- Cria a tabela usuarios
CREATE TABLE usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_usuario)
);