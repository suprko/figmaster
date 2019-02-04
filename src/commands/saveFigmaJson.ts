/**
 * Save Figma JSON into its own file, passing in token and file ID via command line arguments.
 */

import { getFigmaRawJson } from "../getFigma";
import fs from "fs";

const token = process.argv[2];
const fileId = process.argv[3];

getFigmaRawJson(token, fileId).then(res => {
  try {
    fs.writeFileSync(".figmaster/figma.json", JSON.stringify(res, null, 2));
  } catch (err) {
    console.log(err);
  }
});
