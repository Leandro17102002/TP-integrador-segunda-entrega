const {Router} = require('express');
const router = Router();
const {listarProductos, crearProducto, obtenerProductoPorId} = require('../controllers/productosController');

router.get('/', listarProductos);

router.get('/:id', obtenerProductoPorId);

router.post('/', crearProducto);


module.exports = router;
