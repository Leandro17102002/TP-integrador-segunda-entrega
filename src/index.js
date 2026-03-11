
require ('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

const conexionMongo = require('./database/connection_atlas');
conexionMongo();


app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en https://tp-integrador-segunda-entrega-production.up.railway.app/`);
});