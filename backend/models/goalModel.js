const mongoose = require("mongoose");

//aqui criamos o nosso schema para os goals, onde vamos criar um schema e vamos passar a info necessária
//de referir que o campo text tá definido como um objecto para podermos passar algumas regras, como o tipo de dados e se este é required ou não
//o objecto a seguir com o timestamps que cria dois campos: createdAt e updatedAt. This option adds createdAt and updatedAt properties that are timestamped
//with a Date, and which does all the work for you. Any time you update the document, it updates the updatedAt property
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value!"], //aqui dizemos que é required, caso não tenha nada manda a mensagem que tem a seguir
    },
  },
  {
    timestamps: true,
  }
);

//aqui passamos o model, onde vai ter o nome e o schema
module.exports = mongoose.model("Goal", goalSchema);
