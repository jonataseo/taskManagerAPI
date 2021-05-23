/**
 * File: /config/database
 * Description: File responsible for database connectionString
 * Date: 23/05/2021
 * Author: Jônatas E. Oliveira
 */


const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Database Connection;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Connect to Database Successfully!!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
