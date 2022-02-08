const express = require("express");
const router = express.Router(); //aqui estamos a usar o router

//aqui temos um exemplo que um get
// os argumentos na função são uma request e uma response
//aqui enviamos uma resposta com o status 200 OK, do tipo .json
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals!" });
});

//aqui temos um exemplo de um post
router.post("/", (req, res) => {
  res.status(200).json({ message: "Goal created!" });
});

//aqui é um exemplo de um put (update)
//temos que meter /:id porque é preciso saber qual o registo que queremos alterar
//depois usamos o req.params para ir buscar o id (req.params vai buscar todos os parametros da request)
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//aqui temos um exemplo de um delete
//precisa do id para apagar o objeto pretendido
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = router;
