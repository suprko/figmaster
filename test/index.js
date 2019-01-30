"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as fs from "fs";
const index_1 = require("../dist/index");
const { figmaToken } = require("./secrets");
const fileId = "7pVyYhhKgQdkdj7PRQnVrm";
index_1.getFigmaRaw(figmaToken, fileId).then(val => {
    console.log(val);
    // fs.writeFile("./test/results.json", val, err => {
    //   if (err) return console.log(err);
    //   console.log("File saved successfully.");
    // });
});
