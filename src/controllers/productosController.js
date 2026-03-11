const productoCollection = require('../models/productosModel');

const dameProductos = (req, res) => {
    res.send('productos');
}

const guardarProducto = async (req, res) => {
        const {id, producto, precio, stock} = req.body;
        const productoNuevo = {
            id,
            producto,
            precio,
            stock
        };
        try{
            const productoNuevoMongo = new productoCollection(productoNuevo);
            await productoNuevoMongo.save();
        } catch (error) {
            console.error("Error al guardar el producto:", error);
        }

        res.json({
        message: 'Producto registrado',
        "Nuevo producto": productoNuevo
    })
    }

module.exports = {
    dameProductos,
    guardarProducto
}