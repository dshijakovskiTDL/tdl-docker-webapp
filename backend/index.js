const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors package
const logger = require('pino-http');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5050;

app.use(cors()); // Enable CORS

app.use(logger({
  transport: {
    target: 'pino-pretty'
  }
}))

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/', (_, res) => { 
  return res.status(200).send('Hey yall! I\'m a dummy API deployed on a k8s cluster, isn\'t that awesome!')
})

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM mytable');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/health', async (_, res) => { 
  try {
    await pool.query('SELECT 1');
    res.status(200).send('OK')
  } catch (e) { 
    console.log(e)
    res.status(500).send('Database connection failed')
  }
})

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
