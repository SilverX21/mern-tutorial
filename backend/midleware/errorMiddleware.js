//aqui vamos usar algum middleware para lidar com as chamadas e os erros que podem surgir

//aqui vamos passar o erro (err), a request (req), a response (res) e o next (próxima função para chamar)
//esta função vai basicamente tratar das chamadas e formatar o corpo da resposta, isto para que não se tenham respostas com bodies desformatados
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  //a stack só vai ter algo caso não se esteja em ambiente de produção
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
