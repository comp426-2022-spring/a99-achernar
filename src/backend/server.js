const express = require("express");
const app = express();
const { db, dbInit } = require("./database");
const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function appServer() {
    dbInit();
    const port = 5555;
    app.listen(port, () => {
        console.log(`App is running on port 5555`);
    });
}

// start up the server
appServer();

// TO DO: more middleware functions that insert into database
// log database middleware
app.use((req, res, next) => {
    let logdata = {
        remoteaddr: req.ip,
        remoteuser: req.user,
        time: Date.now(),
        method: req.method,
        url: req.url,
        protocol: req.protocol,
        httpversion: req.httpVersion,
        status: res.statusCode,
        referer: req.headers["referer"],
        useragent: req.headers["user-agent"],
    };
    const stmt = db.prepare(
        `INSERT INTO accesslog (remoteaddr, remoteuser, time, method, url, protocol, httpversion, status, referer, useragent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    stmt.run(Object.values(logdata));
    next();
});

// counties database middleware
app.use((req, res, next) => {
    const coolPath = path.join(__dirname, "./data/county.csv");
    fs.createReadStream(coolPath)
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            let countydata = {
                rownumber: row[0],
                date: row[1],
                county: row[2],
                dailycases: row[3],
                deaths: row[4]
            };
            const stmt = db.prepare(
                `INSERT INTO counties (rownumber, date, county, dailycases, deaths) VALUES (?, ?, ?, ?, ?)`
            );
            stmt.run(Object.values(countydata));
        });
    next();
});

// state database middleware
app.use((req, res, next) => {
    const coolPath = path.join(__dirname, "./data/state.csv");
    fs.createReadStream(coolPath)
        .pipe(parse({ delimiter: ",", from_line: 2}))
        .on("data", function (row) {
            let statedata = {
                date: row[0],
                positive: row[1],
                deaths: row[2]
            };
            const stmt = db.prepare(
                `INSERT INTO state (date, positive, deaths) VALUES (?, ?, ?)`
            );
            stmt.run(Object.values(statedata));
        });
    next();
});

// debug endpoint for interaction logs - TO DO: restrict to admins only
app.get("/app/logs", (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM accesslog`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// define check endpoint
app.get("/app", (req, res) => {
    //respond with status 200
    res.statusCode = 200;

    //respond with status message "OK"
    res.statusMessage = "OK";
    res.writeHead(res.statusCode, { "Content-Type": "text/plain" });
    res.end(res.statusCode + " " + res.statusMessage);
});

// Endpoint for getting statewide data in JSON format
app.get("/app/state/", (req, res) => {
    try {
        //selects only the 2 most updated case counts
        const stmt = db.prepare(`SELECT Positive FROM state LIMIT 2`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// Endpoint for getting county-wide data in JSON format
app.get("/app/county/", (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM counties`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// default endpoint
app.use("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});
