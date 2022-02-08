//este é o controller dos goals, onde se irá lidar com as requests

//@desc     Get goals
//@route    GET /api/goals
//@access   private
// os argumentos na função são uma request e uma response
//aqui enviamos uma resposta com o status 200 OK, do tipo .json
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc     Set goals
//@route    POST /api/goals
//@access   private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goal" });
};

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   private
//temos que meter /:id porque é preciso saber qual o registo que queremos alterar
//depois usamos o req.params para ir buscar o id (req.params vai buscar todos os parametros da request)
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   private
//precisa do id para apagar o objeto pretendido
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
};

//aqui estamos a exportar este módulo, onde iremos utilizar as funções que estão no objeto em baixo
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
