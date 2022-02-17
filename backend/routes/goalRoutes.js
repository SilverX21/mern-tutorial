const express = require("express");
const router = express.Router(); //aqui estamos a usar o router
//em baixo utilizo o controller dos goals, onde vou pegar determinadas funções
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

//aqui temos um exemplo que um get e um post
//fazemos o chaining para que ele utilize a route que definimos para as duas situações, ou seja, vai aplicar o path para as duas
router.route("/").get(protect, getGoals).post(protect, setGoal); //protect para proteger a route
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
