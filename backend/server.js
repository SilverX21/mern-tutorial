const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./midleware/errorMiddleware");
//process.env.PORT utiliza o valor que está no ficheiro .env, na variável PORT
const port = process.env.PORT || 5000;

//na linha em baixo estamos a utilizar o express
const app = express();

//de seguida vaoms usar algum middleware para que possamos utilizar os bodies das requests que recebemos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//aqui estamos a mandar para o ficheiro goalRoutes
//primeiro colocamos o caminho para fazer as chamadas e depois a route para o ficheiro que tem o CRUD
app.use("/api/goals", require("./routes/goalRoutes"));

//aqui estamos a usar a classe que criamos no middleware para o error handling
//temos de usar por baixo do route, para que possa fazer override
app.use(errorHandler);

//em baixo fica à escuta na porta 5000
app.listen(port, () => console.log(`Server started on port ${port}`));
