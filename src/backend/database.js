const db = require("better-sqlite3")("database.db");

function dbInit() {
    const accountStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='accounts';`
    );
    const logStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='accesslog';`
    );
    const countyStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='counties';`
    );
    const stateStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='state';`
    );
    const hospitalStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='hospital';`
    )
    const waterStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='wastewater';`
    )
    const vaccineStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='vaccine';`
    )
    const outbreakStmt = db.prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='outbreaks';`
    )
    
    let accountRow = accountStmt.get();
    let logRow = logStmt.get();
    let countyRow = countyStmt.get();
    let stateRow = stateStmt.get();
    let hospitalRow = hospitalStmt.get();
    let waterRow = waterStmt.get();
    let vaccineRow = vaccineStmt.get();
    let outbreakRow = outbreakStmt.get();

    if (accountRow === undefined) {
        const accountInit = `
            CREATE TABLE accounts (
                id INTEGER PRIMARY KEY,
                name TEXT,
                username TEXT,
                password TEXT,
                emailaddr TEXT,
                age TEXT,
                county TEXT,
                profilepic TEXT,
                admin TEXT
            );
        `;
        db.exec(accountInit);
        console.log("Account database has been created.");
    } else {
        console.log("Account database already exists.");
    }

    if (logRow === undefined) {
        const logInit = `
            CREATE TABLE accesslog (
                id INTEGER PRIMARY KEY,
                remoteaddr TEXT,
                remoteuser TEXT,
                time INTEGER,
                method TEXT,
                url TEXT,
                protocol TEXT,
                httpversion INTEGER,
                status INTEGER,
                referer TEXT,
                useragent TEXT
            );    
        `;
        db.exec(logInit);
        console.log("Interaction database has been created.");
    } else {
        console.log("Interaction database already exists.");
    }

    if (countyRow === undefined) {
        const countyInit = `
            CREATE TABLE counties (
                id INTEGER PRIMARY KEY,
                rownumber INTEGER,
                date TEXT,
                county TEXT,
                dailycases INTEGER,
                deaths INTEGER
            );    
        `;
        db.exec(countyInit);
        console.log("County database has been created.");
    } else {
        console.log("County database already exists.");
    }

    if (stateRow === undefined) {
        const stateInit = `
            CREATE TABLE state (
                id INTEGER PRIMARY KEY,
                date TEXT,
                positive INTEGER,
                deaths INTEGER
            );      
        `;
        db.exec(stateInit);
        console.log("State database has been created.");
    } else {
        console.log("State database already exists.");
    }

    if (hospitalRow === undefined) {
        const hospitalInit = `
            CREATE TABLE hospital (
                id INTEGER PRIMARY KEY,
                date TEXT,
                hospitalizations INTEGER
            );      
        `;
        db.exec(hospitalInit);
        console.log("Hospital database has been created.");
    } else {
        console.log("Hospital database already exists.");
    }

    if (waterRow === undefined) {
        const waterInit = `
            CREATE TABLE wastewater (
                id INTEGER PRIMARY KEY,
                plant TEXT,
                county TEXT,
                date TEXT,
                population INTEGER,
                particles INTEGER
            );      
        `;
        db.exec(waterInit);
        console.log("Wastewater database has been created.");
    } else {
        console.log("Wastewater database already exists.");
    }

    if (vaccineRow === undefined) {
        const waterInit = `
            CREATE TABLE vaccine (
                id INTEGER PRIMARY KEY,
                county TEXT,
                onedose INTEGER,
                twodoses INTEGER,
                booster INTEGER,
                population INTEGER,
                totalpopulation INTEGER,
                totaltwo INTEGER,
                totalboost INTEGER
            );      
        `;
        db.exec(waterInit);
        console.log("Vaccine database has been created.");
    } else {
        console.log("Vaccine database already exists.");
    }

    if (outbreakRow === undefined) {
        const outbreakInit = `
            CREATE TABLE outbreaks (
                id INTEGER PRIMARY KEY,
                county TEXT,
                nursinghome INTEGER,
                carefacility INTEGER,
                correctionalfacility INTEGER,
                other INTEGER
            );      
        `;
        db.exec(outbreakInit);
        console.log("Outbreak database has been created.");
    } else {
        console.log("Outbreak database already exists.");
    }
}



module.exports = { db, dbInit };
