const mongoose = require("../config/conexao");

const imovelSchema = new mongoose.Schema({
  cidade: String,
  rua: String,
  localizacao: String,
  numero: String,
  bairro: String,
  foto: String,
});

const imovel = mongoose.model("imovel", imovelSchema);

module.exports = imovel;
