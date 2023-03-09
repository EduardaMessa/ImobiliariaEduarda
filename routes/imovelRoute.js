const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const imovelController = require("../controller/imovelController");

router.get("/imovel/add", imovelController.abreadd);
router.post("/imovel/add", upload.single("foto"), imovelController.add);
router.get("/imovel/lst", imovelController.list);
router.post("/imovel/lst", imovelController.filtro);
router.get("/imovel/edt/:id", imovelController.abreedt);
router.post("/imovel/edt/:id", upload.single("foto"), imovelController.edt);
router.get("/imovel/del/:id", imovelController.del);

module.exports = router;
