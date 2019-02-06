import { jsonToScss } from "../jsonToScss";
import fs from "fs";

const inputFile = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const outputFolder = process.argv[3];

jsonToScss(inputFile, outputFolder);
