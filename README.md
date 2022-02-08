Aqui estamos a seguir o tutorial do seguinte vídeo:
https://www.youtube.com/watch?v=-0exw-9YJBo

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
