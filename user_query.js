const db = require('../databaseconnection');

function getAllUsers() {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log('All Users:', results);
  });
}

module.exports = { getAllUsers };
