/**
 * File: app.js
 * Description: file responsible for the connection with 'server.js' 
 * Data: 23/05/2021
 * Author: Jônatas E. Oliveira
 */

const express =  require('express');
const cors = require('cors');

const app = express();

// ==> API Routes (Task)
const index = require('./routes/index');
const taskRoute = require('./routes/task.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vdn.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/', taskRoute);

module.exports = app;