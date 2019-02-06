"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonToScss_1 = require("../jsonToScss");
const fs_1 = __importDefault(require("fs"));
const inputFile = JSON.parse(fs_1.default.readFileSync(process.argv[2], "utf8"));
const outputFolder = process.argv[3];
jsonToScss_1.jsonToScss(inputFile, outputFolder);
//# sourceMappingURL=saveScss.js.map