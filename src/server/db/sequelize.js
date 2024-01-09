const { Sequelize } = require('sequelize');
const dbPath = require('path').resolve(__dirname, 'habit_db.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

module.exports = {
  sequelize
};