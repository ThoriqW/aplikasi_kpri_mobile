const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kpri_kd'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
