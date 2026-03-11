const productoCollection = require("../models/productosModel");
const mongoose = require("mongoose");
/* const validarObjectId = (id) => {mongoose.Types.ObjectId.isValid(id)}; */

const dameProductos = (req, res) => {
res.send("productos");
};

const crearProducto = async (req, res) => {
    const {id, producto, precio, stock } = req.body;

    if (!id || !producto || !precio || !stock) {
    return res.status(400).json({
        message: "Faltan datos obligatorios",
        requiredFields: ["id", "producto", "precio", "stock"],
    });
}
const productoNuevo = {
    id,
    producto,
    precio,
    stock,
};

try {
    const productoNuevoMongo = new productoCollection(productoNuevo);
    await productoNuevoMongo.save();

    res.json({
        message: "Producto registrado",
        "Nuevo producto": productoNuevo,
    });
} catch (error) {
    res.status(500).json({
        message: "Error al guardar el producto",
        error: error.message,
    });
}
};


const listarProductos = async (req, res) => {

    try{
        const arrayProductos = await productoCollection.find();
        console.log(arrayProductos);

        res.json({
            message: 'Productos listados correctamente',
            data: arrayProductos
        });
    }catch(error){
        res.status(500).json({
        message: 'Error al guardar el producto',
        error: error.message
        });
    }
}


const obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: "ID inválido" });
    }

    const producto = await productoCollection.findById(id);

    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.status(200).json(producto);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};


module.exports = {
    dameProductos,
    crearProducto,
    obtenerProductoPorId,
    listarProductos
};