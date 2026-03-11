const {Router} = require('express');
const router = Router();
const {listarProductos, crearProducto, obtenerProductoPorId, actualizarProducto} = require('../controllers/productosController');

router.get('/', listarProductos);

router.get('/:id', obtenerProductoPorId);

router.post('/', crearProducto);

router.put('/:id', actualizarProducto);


module.exports = router;
