import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_complete',
  password: 'Dci1234!',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});



app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' http://localhost:3001");
  next();
});

// Hinzugefügte Route für das Favicon
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/check-connection', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
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
