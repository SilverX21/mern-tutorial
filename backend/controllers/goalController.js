//este é o controller dos goals, onde se irá lidar com as requests

//aqui utilizamos o async handler do express
const asyncHandler = require("express-async-handler");

//@desc     Get goals
//@route    GET /api/goals
//@access   private
// os argumentos na função são uma request e uma response
//aqui enviamos uma resposta com o status 200 OK, do tipo .json
//aqui usamos o asyncHandler para utilizar as prorpiedades do error handling do express
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc     Set goals
//@route    POST /api/goals
//@access   private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    //res.status(400).json({ message: "Please add a text field!" }); //podemos fazer desta forma para mandar o status 400 com uma mensagem num json
    throw new Error("Plase add a text field!");
  }
  res.status(200).json({ message: "Set goal" });
});

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   private
//temos que meter /:id porque é preciso saber qual o registo que queremos alterar
//depois usamos o req.params para ir buscar o id (req.params vai buscar todos os parametros da request)
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   private
//precisa do id para apagar o objeto pretendido
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

//aqui estamos a exportar este módulo, onde iremos utilizar as funções que estão no objeto em baixo
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
