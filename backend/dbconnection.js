const mysql = require('mysql2');

const dbconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'cellinidb',
    port:3306
});

module.exports = dbconnection;