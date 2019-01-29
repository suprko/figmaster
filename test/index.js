"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const { figmaToken } = require("./secrets");
const fileId = "7pVyYhhKgQdkdj7PRQnVrm";
index_1.getFigmaRaw(figmaToken, fileId).then(val => {
    console.log(val);
});
