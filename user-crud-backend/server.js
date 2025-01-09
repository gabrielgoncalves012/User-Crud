const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;  // Recebendo os dados enviados pelo frontend
  const newUser = { name, email, password };
  users.push(newUser);  // Adiciona o usuário ao array de usuários
  res.status(201).json(newUser);  // Retorna o usuário criado como resposta
});

app.get('/users', (req, res) => {
  res.json(users);  // Retorna a lista de usuários cadastrados
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
