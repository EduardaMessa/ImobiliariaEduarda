const mongoose = require("../config/conexao");

const contratoSchema = new mongoose.Schema({
  data: Date,
  valor: Number,
  nomeCli: {
    type: mongoose.Types.ObjectId,
    ref: "cliente",
  },
  nomeImob: String,
  numimovel: {
    type: mongoose.Types.ObjectId,
    ref: "imovel",
  },
  foto: String,
});

const contrato = mongoose.model("contrato", contratoSchema);

module.exports = contrato;
