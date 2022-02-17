//este é o controller dos goals, onde se irá lidar com as requests

//aqui utilizamos o async handler do express
const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel"); //aqui usamos o model dos goals
const User = require("../models/userModel"); //aqui usamos o model dos users

//@desc     Get goals
//@route    GET /api/goals
//@access   private
// os argumentos na função são uma request e uma response
//aqui enviamos uma resposta com o status 200 OK, do tipo .json
//aqui usamos o asyncHandler para utilizar as prorpiedades do error handling do express
const getGoals = asyncHandler(async (req, res) => {
  //aqui vamos procurar os goals
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

//@desc     Set goals
//@route    POST /api/goals
//@access   private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    //res.status(400).json({ message: "Please add a text field!" }); //podemos fazer desta forma para mandar o status 400 com uma mensagem num json
    throw new Error("Plase add a text field!");
  }

  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.status(200).json(goal);
});

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   private
//temos que meter /:id porque é preciso saber qual o registo que queremos alterar
//depois usamos o req.params para ir buscar o id (req.params vai buscar todos os parametros da request)
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //verificar se o user que tem a sessão é o utilizador do goal
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //o primeiro parâmetro é o id do goal a atualizar
  //o segundo é o body da request para colocar os campos todos
  //o terceiro é um objecto chamado options, que o vai criar caso não exista
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   private
//precisa do id para apagar o objeto pretendido
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("The goal doesn't exists!");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //verificar se o user que tem a sessão é o utilizador do goal
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //aqui apagamos o goal que encontrarmos
  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

//aqui estamos a exportar este módulo, onde iremos utilizar as funções que estão no objeto em baixo
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
