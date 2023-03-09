const express = require("express");
const app = express();
const path = require("path");

var moment = require("moment");
app.locals.moment = moment;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const clienteRoute = require("./routes/clienteRoute");
const contratoRoute = require("./routes/contratoRoute");
const imovelRoute = require("./routes/imovelRoute");
const publicRoute = require("./routes/publicRoute");

app.use("/admin", clienteRoute);
app.use("/admin", contratoRoute);
app.use("/admin", imovelRoute);
app.use("/", publicRoute);

app.listen(3000, function () {
  console.log("Servidor funcionando na porta 3000");
});
