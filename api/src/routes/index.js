/**
 * File: src/routes/index.js
 * Description: File responsible for calling the API of the application.
 * Date: 23/05/2021
 * Author: Jonatas E. Oliveira
 */

const express = require("express");

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Welcome to TaskManager API (Made with Node, Express and PostgreSQL',
        version: '1.0.0',
    });
});

module.exports = router;