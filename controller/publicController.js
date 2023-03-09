const Contrato = require("../model/Contrato");

function abreindex(req, res) {
  Contrato.find({})
    .populate("nomeCli")
    .populate("numimovel")
    .exec(function (err, contratos) {
      res.render("public/index", { Contratos: contratos });
    });
}

module.exports = {
  abreindex,
};
