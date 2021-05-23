/**
 * File: server.js
 * Description: File responsible for all config and execution of the api
 * Data: 23/05/2021
 * Author: Jônatas E. Oliveira
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('API running on port ', port);
});