// routes/routes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const task_1Controller = require('../controllers/task_1Controller');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/tasks/:id', taskController.getSingleTask);

router.get('/tasks_1', task_1Controller.getAllTasks_1);
router.post('/tasks_1', task_1Controller.createTask_1);
router.put('/tasks_1/:id', task_1Controller.updateTask_1);
router.delete('/tasks_1/:id', task_1Controller.deleteTask_1);
router.get('/tasks_1/:id', task_1Controller.getSingleTask_1forTask);

module.exports = router;
