const Imovel = require("../model/Imovel");

function abreadd(req, res) {
  res.render("imovel/add");
}

function add(req, res) {
  let imovel = new Imovel({
    cidade: req.body.cidade,
    rua: req.body.rua,
    localizacao: req.body.localizacao,
    numero: req.body.numero,
    bairro: req.body.bairro,
    foto: req.file.filename,
  });

  imovel.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/imovel/lst");
    }
  });
}

function list(req, res) {
  Imovel.find({}, function (err, imoveis) {
    res.render("imovel/lst", { Imoveis: imoveis });
  });
}

function filtro(req, res) {
  Imovel.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, imoveis) {
      res.render("imovel/lst", { Imoveis: imoveis });
    }
  );
}

function del(req, res) {
  Imovel.findByIdAndDelete(req.params.id, function (err, imovel) {
    res.redirect("/admin/imovel/lst");
  });
}

function abreedt(req, res) {
  Imovel.findById(req.params.id, function (err, imovel) {
    res.render("imovel/edt", { Imovel: imovel });
  });
}

function edt(req, res) {
  Imovel.findByIdAndUpdate(
    req.params.id,
    {
      cidade: req.body.cidade,
      rua: req.body.rua,
      localizacao: req.body.localizacao,
      numero: req.body.numero,
      bairro: req.body.bairro,
      foto: req.file.filename,
    },
    function (err, imovel) {
      res.redirect("/admin/imovel/lst");
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
