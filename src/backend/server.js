const express = require("express");
const app = express();
const { db, dbInit } = require("./database");
const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");
const router = require("./expressRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../frontend"));

// check if databases have been created
dbInit();
const executed = db.prepare(`SELECT EXISTS (SELECT 1 FROM state);`).pluck().get();

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

// if database for counties and state is present, skip over more inserts
if (executed === 0) {
    function countiesEntry() {
        const coolPath1 = path.join(__dirname, "./data/county.csv");
        fs.createReadStream(coolPath1)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                let countydata = {
                    rownumber: row[0],
                    date: row[1],
                    county: row[2],
                    dailycases: row[3],
                    deaths: row[4],
                };
                const stmt = db.prepare(
                    `INSERT INTO counties (rownumber, date, county, dailycases, deaths) VALUES (?, ?, ?, ?, ?)`
                );
                stmt.run(Object.values(countydata));
            });
    }
    countiesEntry();
    
    function stateEntry() {
        const coolPath = path.join(__dirname, "./data/state.csv");
        fs.createReadStream(coolPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                let statedata = {
                    date: row[0],
                    positive: row[1],
                    deaths: row[2],
                };
                const stmt = db.prepare(
                    `INSERT INTO state (date, positive, deaths) VALUES (?, ?, ?)`
                );
                stmt.run(Object.values(statedata));
            });
    }
    stateEntry();
}

// set up router for api endpoints (logs, state, county)
app.use("/api", router);

// default endpoint
// app.all("*", (req, res) => {
//     res.send("../frontend/index.html")
// });

// define check endpoint
app.get("/app/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/index.html"), err => {
        if (err) {
            console.log(err);
        }
    });
});

// start up the server
const port = 5555;
app.listen(port, () => {
    console.log(`App is running on port 5555`);
});
