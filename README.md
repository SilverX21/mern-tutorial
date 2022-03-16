Aqui estamos a seguir a parte 1 do tutorial do seguinte vídeo:
https://www.youtube.com/watch?v=-0exw-9YJBo

Nesta parte vamos tratar do backend da app

0. Criar o ficheiro jsonconfig.json para colocar lá a versão do javascript:
   {
   "compilerOptions": {
   "module": "commonjs",
   "target": "es6"
   },
   "exclude": ["node_modules"]
   }

1. Criar o server.js

2. Correr o comando "npm init"

3. Criar o ficheiro .gitignore e colocar lá o "node_modules" e o ficheiro ".env"

4. Correr o comando "npm i express dotenv mongoose colors"

5. Correr o comando "npm i -D nodemon" -> é a ferramenta que vai constantemente verificar o nosso ficheiro server.js para não termos de estar sempre a fazer restart ao mesmo

6. Depois tem de ser colocar isto, no package.json, na secção dos scripts:
   "start": "node backend/server.js",
   "server": "nodemon backend/server.js"

7. Para testar posso usar o seguinte comando:
   npm run server ->fica sempre à escuta de alterações

8. fazer o setup do server.js para utilizar o express e criar a port onde vamos inicializar a app

9. Criar o ficheiro .env -> aqui podemos colocar variáveis globais para o projeto

10. Criar a pasta routes, que vai lidar com o routing dos pedidos de

11. criar a pasta controllers, a qual vai receber os pedidos para determinados tipos de chamadas

12. instalar o seguinte pacote: "npm i express-async-handler" -> error handling nas funções assincronas

13. Sacamos a aplicações Compass, do MongoDB, que é uma ferramenta visual e que vai ajudar no desenvolvimento:
    https://www.mongodb.com/products/compass

14. fazemos o setup da base de dados (MongoDB)

- Criar base de dados (MongoDB)
- fazer connect com o projeto
- adicionamos no ficheiro ".env" a connection
- alteramos lá o nome que aparece (deve ter algo como myFirstDatabase)
- colocamos a password

15. criamos a pasta config, dentro da pasta backend

16. Criamos o ficheiro db.js para usar o mongoose e o mongodb

17. Criamos a pasta model para colocar lá os nossos models para a app

---

Aqui vamos seguir a parte 2 do tutorial de MERN:
https://www.youtube.com/watch?v=enopDSs3DRw&t=1s&ab_channel=TraversyMedia

Nesta parte vamos tratar da autenticação da app

1. Criamos o model "userModel", para a autenticação

2. Depois criamos o userRoutes e o userController para podermos lidar com as chamadas, adicionando o userRoutes ao server.js

3. Para não guardarmos as passwords como texto simples, o que é inseguro, temos de as encriptar, para isso instalamos o seguite package: "npm i bcryptjs"

4. Para os tokens da autenticação e da sessão, temos de instalar o JWT tokens: "npm i jsonwebtoken"

5. Depois só temos de adicionar nos métodos CRUD a verificação da autenticação e fica feito
_______________________________________________________________________________________________________________

Aqui vamos seguir a parte 3 do tutorial de MERN:
https://www.youtube.com/watch?v=mvfsC66xqj0&t=5s&ab_channel=TraversyMedia


_______________________________________________________________________________________________________________

Aqui vamos seguir a parte 4 do tutorial de MERN:
https://www.youtube.com/watch?v=UXjMo25Nnvc&ab_channel=TraversyMedia