const express = require('express');
const router = express.Router();
const { db } = require("./database")

// define the state json route
router.get('/state', (req, res) => {
    try {
        //selects only the 2 most updated case counts
        const stmt = db.prepare(`SELECT Positive FROM state LIMIT 2`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// define the county json route
router.get('/county', (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM counties`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// define the logs json route
router.get('/logs', (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM accesslog`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// define the account json route
router.get('/getUserList', (req, res) => {
    //need to do
});

module.exports = router;