

const productoCollection = require('../models/productosModel');

const dameProductos = (req, res) => {
    res.send('productos');
}

const guardarProducto = async (req, res) => {
    const { id, producto, precio, stock } = req.body;
    const productoNuevo = {
        id,
        producto,
        precio,
        stock
    };
    try {
        const productoNuevoMongo = new productoCollection(productoNuevo);
        await productoNuevoMongo.save();

        res.json({
        message: 'Producto registrado',
        "Nuevo producto": productoNuevo
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error al guardar el producto',
        error: error.message
    
        });
    }
}
    

module.exports = {
            dameProductos,
            guardarProducto
        };
