const express = require('express');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

// TODO: add CRUD routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });