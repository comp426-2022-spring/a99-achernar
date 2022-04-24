const express = require("express");
const app = express();
const {db, dbInit} = require("./database");
var csv = require('jquery-csv');
const fs = require('fs');
// const { stringify } = require("querystring");
const parser = require('csv-parser');
const results = [];
fs.createReadStream('./src/backend/data/state.csv');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

function appServer() {
    dbInit();
    const port = 5555;
    app.listen(port, () => {
        console.log(`App is running on port 5555`);
    });
}

// start up the server
appServer();

// TO DO: middleware function(s) that inserts into database
//app.use((req, res, next) => {});

// debug endpoint for interaction logs - TO DO: restrict to admins only
app.get('/app/logs', (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM accesslog`).all();
        res.status(200).json(stmt);
    } catch (e) {
        console.error(e);
    }
});

// define check endpoint
app.get('/app/', (req, res) => {
    //respond with status 200
    res.statusCode = 200;

    //respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage);
});

// Endpoint for getting statewide data in JSON format
app.get('/app/state/', (req, res) => {
    res.statusCode = 200;

    fs.readFile('./src/backend/data/state.csv','utf8', function(err,data){
        var dataArray = data.split(/\r?\n/);
        console.log(csv.toArray(dataArray))
    });
})

// Endpoint for getting county-wide data in JSON format
app.get('/app/county/', (req, res) => {
    res.statusCode = 200;

    var sample = './src/backend/data/county.csv';

    fs.readFile(sample, 'UTF-8', function (err, csv) {
      if (err) { console.log(err); }
      csv.toArray(csv, {}, function (err, data) {
        if (err) { console.log(err); }
        for (var i = 0, len = data.length; i < len; i++) {
          console.log(data[i]);
        }
      });
    });
})

// default endpoint
app.use(function(req, res){
    res.status(404).send("404 NOT FOUND");
});