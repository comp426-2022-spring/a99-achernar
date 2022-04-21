import Database from "better-sqlite3";

const db = new Database("database.db");

const accountStmt = db.prepare(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='accounts';`
);
const logStmt = db.prepare(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='accesslog';`
);
const countyStmt = db.prepare(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='counties';`
);

let accountRow = accountStmt.get();
let logRow = logStmt.get();
let countyRow = countyStmt.get();

if (accountRow === undefined) {
    const accountInit = `
        CREATE TABLE accounts (
            id INTEGER PRIMARY KEY,
            name TEXT,
            username TEXT,
            emailaddr TEXT,
            age TEXT,
            profilepic TEXT
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
            time NUMBER,
            method TEXT,
            url TEXT,
            protocol TEXT,
            httpversion NUMBER,
            status NUMBER,
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
    const logInit = `
        CREATE TABLE accesslog (
            id INTEGER PRIMARY KEY,
            county TEXT,
            dailycases NUMBER,
            biweeklychange NUMBER,
            fullyvax NUMBER
        );    
    `;
    db.exec(logInit);
    console.log("County database has been created.");
} else {
    console.log("County database already exists.");
}

export {db};