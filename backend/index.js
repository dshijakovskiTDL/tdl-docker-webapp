const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors package
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5050; // Change this to 5000

app.use(cors()); // Enable CORS

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM mytable');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});