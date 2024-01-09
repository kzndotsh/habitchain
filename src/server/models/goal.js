const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize');

class Goal extends Model {}
Goal.init({
  title: DataTypes.STRING
}, { sequelize, modelName: 'goal' });

module.exports = Goal;