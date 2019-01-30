// import * as fs from "fs";
import { getFigmaRaw } from "../dist/index";

const { figmaToken } = require("./secrets");
const fileId = "7pVyYhhKgQdkdj7PRQnVrm";

getFigmaRaw(figmaToken, fileId).then(val => {
  console.log(val);
  // fs.writeFile("./test/results.json", val, err => {
  //   if (err) return console.log(err);
  //   console.log("File saved successfully.");
  // });
});
