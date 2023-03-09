const mongoose = require("../config/conexao");

const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  cpf: String,
  rg: String,
  telefone: String,
  foto: String,
});

const cliente = mongoose.model("cliente", clienteSchema);

module.exports = cliente;
