const productoCollection = require("../models/productosModel");
const mongoose = require("mongoose");

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

const crearProducto = async (req, res) => {
    const {producto, precio, stock } = req.body;

    if (!producto || !precio || !stock) {
    return res.status(400).json({
        message: "Faltan datos obligatorios",
        requiredFields: ["producto", "precio", "stock"],
    });
    }
    const productoNuevo = {
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


const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { producto, precio, stock } = req.body;

        // validar id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ mensaje: "ID inválido" });
        }

        const productoActualizado = await productoCollection.findByIdAndUpdate(
            id,
            { producto, precio, stock },
            { new: true } 
        );

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.status(200).json({
            message: "Producto actualizado correctamente",
            data: productoActualizado
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al actualizar el producto",
            error: error.message
        });

    }
};

const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ mensaje: "ID inválido" });
        }

        const productoEliminado = await productoCollection.findByIdAndDelete(id);

        if (!productoEliminado) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({
            message: "Producto eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al eliminar el producto",
            error: error.message
        });

    }
};


module.exports = {
    crearProducto,
    obtenerProductoPorId,
    listarProductos,
    actualizarProducto,
    eliminarProducto
};