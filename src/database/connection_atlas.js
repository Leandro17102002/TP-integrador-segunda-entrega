
const mongoose = require('mongoose');


const dotenv = require('dotenv');
dotenv.config();


const MONGO_PASSWORD = process.env.MONGO_PASSWORD;


const uri = `mongodb+srv://leandro_pelozo:${MONGO_PASSWORD}@cluster0.ya4bfoc.mongodb.net/ecommerce`;

const clientOptions = { serverApi: 
  { version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};


async function conexionMongo() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Conectado con éxito a MongoDB!");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

module.exports = conexionMongo;