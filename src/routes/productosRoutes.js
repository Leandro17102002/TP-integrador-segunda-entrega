const {Router} = require('express');
const router = Router();
const {dameProductos, guardarProducto} = require('../controllers/productosController');

router.get('/', dameProductos);

router.post('/', guardarProducto);

module.exports = router;