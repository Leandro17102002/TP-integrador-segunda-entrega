
const mongoose = require('mongoose');


const dotenv = require('dotenv');
dotenv.config();


const uri = process.env.MONGO_URI;

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