const Contrato = require("../model/Contrato");
const Cliente = require("../model/Cliente");
const Imovel = require("../model/Imovel");

function abreadd(req, res) {
  Cliente.find({}, function (err, clientes) {
    Imovel.find({}, function (err, imoveis) {
      res.render("contrato/add", { Clientes: clientes, Imoveis: imoveis });
    });
  });
}

function add(req, res) {
  let contrato = new Contrato({
    valor: req.body.valor,
    data: new Date(),
    nomeCli: req.body.nomeCli,
    nomeImob: req.body.nomeImob,
    numimovel: req.body.numimovel,
    foto: req.file.filename,
  });

  contrato.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/contrato/lst");
    }
  });
}

function list(req, res) {
  Contrato.find({})
    .populate("nomeCli")
    .populate("numimovel")
    .exec(function (err, contratos) {
      res.render("contrato/lst", { Contratos: contratos });
    });
}

function filtro(req, res) {
  Contrato.find(
    { titulo: new RegExp(req.body.pesquisar, "i") },
    function (err, contratos) {
      res.render("contrato/lst", { Contratos: contratos });
    }
  );
}

function del(req, res) {
  Contrato.findByIdAndDelete(req.params.id, function (err, contratos) {
    res.redirect("/admin/contrato/lst");
  });
}

function abreedt(req, res) {
  Contrato.findById(req.params.id, function (err, contrato) {
    Cliente.find({}).exec(function (err, clientes) {
      Imovel.find({}).exec(function (err, imoveis) {
        res.render("contrato/edt", {
          Contrato: contrato,
          Clientes: clientes,
          Imoveis: imoveis,
        });
      });
    });
  });
}

function edt(req, res) {
  Contrato.findByIdAndUpdate(
    req.params.id,
    {
      valor: req.body.valor,
      data: new Date(),
      nomeCli: req.body.nomeCli,
      nomeImob: req.body.nomeImob,
      numimovel: req.body.numimovel,
      foto: req.file.filename,
    },
    function (err, contrato) {
      res.redirect("/admin/contrato/lst");
    }
  );
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedt,
  edt,
  del,
};
