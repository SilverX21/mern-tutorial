const express = require("express");
const router = express.Router(); //aqui estamos a usar o router

//aqui temos um exemplo que um get
// os argumentos na função são uma request e uma response
//aqui enviamos uma resposta com o status 200 OK, do tipo .json
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

nmodule.exports = router;
