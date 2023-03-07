const express = require('express');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');

const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: add CRUD routes


// Connect to database
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});