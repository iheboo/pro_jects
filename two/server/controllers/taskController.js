// controllers/taskController.js
const Task = require('../models/Task');
const Task_1 = require('../models/Task_1');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description ,price } = req.body;
    const newTask = await Task.create({ title, description,price });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description,price, completed } = req.body;
    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title;
    task.description = description;
    task.price = price;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getSingleTask = async (req, res) => {
  try {
    const taskId = req.params.id; // Assuming the task ID is passed as a parameter in the URL
    const task = await Task.findByPk(taskId, { include: Task_1 });

    if (!task) {
      // If the task with the specified ID is not found, return a 404 response
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
