import express from "express";
import fs from "fs";
import morgan from "morgan";
import {db} from "./database"

const app = express();
const fileReader = fs;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log(`App is running on port 5000`);
});

//need to finish