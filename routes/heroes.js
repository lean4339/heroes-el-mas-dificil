const express = require("express");
const router = express.Router();
const controller = require("../controllers/heroesController");

router.get('/', controller.mostrar)

router.get("/detalle",controller.agregarid)

router.get("/detalle/:id", controller.mostrarDetalle)

router.get("/bio/:id/:ok?", controller.mostrarPorOk)

module.exports = router;