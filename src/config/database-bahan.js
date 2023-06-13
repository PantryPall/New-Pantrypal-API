const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dataset_bahan'
});

module.exports = dbPool.promise();