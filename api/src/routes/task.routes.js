/**
 * File: src/routes/task.routes.js
 * Description: File responsible for API routes of 'Task' class
 * Data: 23/05/2021
 * Author: Jônatas Ezequiel de Oliveira
 */

const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller.js');

// ==> Defining routes to CRUD - 'Task':

// ==> Route responsible for creating a new 'Task': (POST): localhost:3000/api/tasks
router.post('/tasks', taskController.createTask);

module.exports = router;