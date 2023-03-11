const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

module.exports = db;
