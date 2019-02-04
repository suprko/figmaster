// import * as fs from "fs";
import { getFigmaRaw } from "../dist/index";
import { writeScss } from "../dist/index";

const { figmaToken } = require("./secrets");
const fileId = "7pVyYhhKgQdkdj7PRQnVrm";

// getFigmaRaw(figmaToken, fileId).then(val => {
//   console.log(val);
//   // fs.writeFile("./test/results.json", val, err => {
//   //   if (err) return console.log(err);
//   //   console.log("File saved successfully.");
//   // });
// });

writeScss(
  {
    colors: {
      "$color-ui-1": "#040b40",
      "$color-ui-2": "#004e69",

      "$color-brand-1": "#408cff",
      "$color-brand-2": "#5461cc",
      "$color-brand-3": "#02cedb",
      "$color-brand-4": "#a35eaa",

      "$color-accent-1": "#fdc700",
      "$color-accent-2": "#e90162"
    }
  },
  `${__dirname}/example-output`
);
