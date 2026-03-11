const {Router} = require('express');
const router = Router();
const {listarProductos, crearProducto, obtenerProductoPorId} = require('../controllers/productosController');

router.get('/', listarProductos);

router.get('/:id', obtenerProductoPorId);

router.post('/', crearProducto);


module.exports = router;


/* import express from "express";
import {
obtenerProductos,
obtenerProductoPorId,
crearProducto,
actualizarProducto,
eliminarProducto,
} from "../controllers/productosController1.js";


router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.post("/", crearProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

export default router; */