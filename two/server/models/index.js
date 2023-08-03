const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json');

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password, {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
  }
);

// Import your models here
const TaskModel = require('./Task')(sequelize);
const Task_1Model = require('./Task_1')(sequelize);

// Define the association
TaskModel.hasMany(Task_1Model, { foreignKey: 'taskId' });
Task_1Model.belongsTo(TaskModel, { foreignKey: 'taskId' });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add your models to the db object
db.Task = TaskModel;
db.Task_1 = Task_1Model;

module.exports = db;
