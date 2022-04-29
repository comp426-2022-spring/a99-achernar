const express = require('express');
const router = express.Router();
const { db } = require("./database")

// define the state json route
router.get('/state', (req, res) => {
    try {
        //selects only the 2 most updated case counts
        const stmt = db.prepare(`SELECT * FROM state LIMIT 2`).all();
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

// define the hospitalizations json route
router.get('/hospital', (req, res) => {
    try {
        //selects only the 2 most updated case counts
        const stmt = db.prepare(`SELECT * FROM hospital LIMIT 2`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
})

// define the wastewater json route
router.get('/wastewater', (req, res) => {
    try {
        //selects only the 2 most updated case counts
        const stmt = db.prepare(`SELECT * FROM wastewater GROUP BY Plant`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
})

module.exports = router;