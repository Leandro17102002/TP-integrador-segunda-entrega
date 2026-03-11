const mongoose = require('mongoose');

const productoCollection = new mongoose.Schema({
    producto:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
});

const productoModel = mongoose.model('producto', productoCollection)

module.exports = productoModel;