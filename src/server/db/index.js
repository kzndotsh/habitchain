const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'habit_db.sqlite');// INPUT_REQUIRED {Specify the correct path to your SQLite database file}
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);// INPUT_REQUIRED {Add your custom error handling message if desired}
  } else {
    console.log('Connected to the SQLite database.');// INPUT_REQUIRED {Add your custom success message if desired}
  }
});

module.exports = db;
