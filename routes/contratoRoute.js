const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const contratoController = require("../controller/contratoController");

router.get("/contrato/add", contratoController.abreadd);
router.post("/contrato/add", upload.single("foto"), contratoController.add);
router.get("/contrato/lst", contratoController.list);
router.post("/contrato/lst", contratoController.filtro);
router.get("/contrato/edt/:id", contratoController.abreedt);
router.post("/contrato/edt/:id", upload.single("foto"), contratoController.edt);
router.get("/contrato/del/:id", contratoController.del);

module.exports = router;
