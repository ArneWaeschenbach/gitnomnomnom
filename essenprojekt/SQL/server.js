import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'Dci1234!',
});

app.use(cors());

app.get('/check-connection', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({ message: 'Server connection error' });
    } else {
      res.json({ message: 'Server connected successfully' });
      connection.release();
    }
  });
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
