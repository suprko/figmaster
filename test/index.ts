import { getFigmaRaw } from "../src/index";

const { figmaToken } = require("./secrets");
const fileId = "7pVyYhhKgQdkdj7PRQnVrm";

getFigmaRaw(figmaToken, fileId).then(val => {
  console.log(val);
});
