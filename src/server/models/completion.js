const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize');
const Goal = require('./goal');

class Completion extends Model {}
Completion.init({
  date: DataTypes.DATEONLY
}, { sequelize, modelName: 'completion' });

Completion.belongsTo(Goal, { foreignKey: 'goal_id' });
Goal.hasMany(Completion, { foreignKey: 'goal_id' });

module.exports = Completion;