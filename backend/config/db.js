const mongoose = require("mongoose");

//aqui vamos tratar da conecção à BD
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    //o .cyan.underline é do package colors, o qual permite que se coloque cores no terminal
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1); //aqui fechamos o processo com uma falha
  }
};

module.exports = connectDB;
