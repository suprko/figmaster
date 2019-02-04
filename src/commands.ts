/**
 * Functions for Figmaster command line.
 */

import { getFigmaRawJson } from "./getFigma";
import fs from "fs";

/**
 * Save Figma JSON into its own file, passing in token and file ID via command line arguments.
 */
export function saveFigmaJson() {
  const token = process.argv[2];
  const fileId = process.argv[3];

  getFigmaRawJson(token, fileId).then(res => {
    fs.writeFileSync(".figmaster/figma.json", res);
  });
}
