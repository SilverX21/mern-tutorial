const express = require("express");
const dotenv = require("dotenv").config();
//process.env.PORT utiliza o valor que está no ficheiro .env, na variável PORT
const port = process.env.PORT || 5000;

const app = express();

//aqui estamos a mandar para o ficheiro goalRoutes
app.use("/api/goals", require("./routes/goalRoutes"));

//em baixo fica à escuta na porta 5000
app.listen(port, () => console.log(`Server started on port ${port}`));
