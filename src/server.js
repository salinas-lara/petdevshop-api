const express = require('express');
const petRoutes = require('./routes/petRoutes');
const logger = require('./middlewares/logger');

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(logger);

app.get('/status', (req, res) => {
  return res.json({ status: "API Online - Projeto Semana 1" });
});

app.use(petRoutes);

app.listen(PORTA, () => {
  console.log(`[SERVIDOR OK] Rodando em http://localhost:${PORTA}`);
});