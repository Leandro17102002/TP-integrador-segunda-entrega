const express = require('express');
const morgan = require('morgan');
const path = require('path');

const productosRouter = require('./routes/productosRoutes');

const app = express();


// Midlewares
app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  


// Utilizamos las rutas 
app.use('/api/productos', productosRouter);

app.get('/', (req, res) => {
    res.send('home');
});


module.exports = app;   