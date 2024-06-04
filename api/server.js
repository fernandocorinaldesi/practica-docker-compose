const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors');
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type','Authorization');
  next();
})
app.options('*', cors());

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT message FROM gestion.messages');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fallo la base de datos' });
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
