const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.64.2',
  user: 'homer_odyssey',
  password: 'homer_odyssey',
  database: 'homer_odyssey',
});
module.exports = connection;
