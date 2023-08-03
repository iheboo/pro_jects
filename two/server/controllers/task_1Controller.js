const Task_1 = require('../models/Task_1');
const Task = require('../models/Task');

exports.getAllTasks_1 = async (req, res) => {
    try {
      const Task_1 = await Task_1.findAll();
      res.json(Task_1);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.createTask_1 = async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const task = await Task.findByPk(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      const {rating, description } = req.body;
      const newTask1 = await Task_1.create({ rating, description, taskId });
      res.status(201).json(newTask1);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.updateTask_1 = async (req, res) => {
    try {
      const { id } = req.params;
      const { rating, description } = req.body;
      const task = await Task_1.findOne({ where: { id } });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      Task_1.rating = rating;
      Task_1.description = description;
      await Task_1.save();
  
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.getSingleTask_1forTask = async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const task = await Task.findByPk(taskId, { include: Task_1 });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task.Task_1);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  exports.deleteTask_1 = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task_1.findOne({ where: { id } });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      await Task_1.destroy();
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };