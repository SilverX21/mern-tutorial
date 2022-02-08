const express = require("express");
const router = express.Router(); //aqui estamos a usar o router
//em baixo utilizo o controller dos goals, onde vou pegar determinadas funções
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//aqui temos um exemplo que um get
router.get("/", getGoals);

//aqui temos um exemplo de um post
router.post("/", setGoal);

//aqui é um exemplo de um put (update)
router.put("/:id", updateGoal);

//aqui temos um exemplo de um delete
router.delete("/:id", deleteGoal);

module.exports = router;
