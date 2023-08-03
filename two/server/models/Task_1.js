const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task_1 = sequelize.define('Task_1', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    }
  });

  return Task_1;
};
