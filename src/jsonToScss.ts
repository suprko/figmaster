import fs from "fs";
import { FigmaObject } from "./interfaces";

/**
 * Take parsed JSON from Figma, write into individual SCSS files.
 * @param objects Array of objects with properties pulled from Figma.
 * @param folder Path to the folder you want to write.
 */
export function jsonToScss(
  objects: { [key: string]: FigmaObject },
  writeFolder: string
) {
  Object.keys(objects).forEach(key => {
    // Create empty SCSS file with this key's name (e.g. "colors.scss")
    let scss = fs.openSync(`${writeFolder}/${key}.scss`, "w");

    // For each key-value pair in this object, write a new line in the SCSS file representing 1 Sass variable
    try {
      Object.keys(objects[key]).forEach(k => {
        fs.appendFileSync(scss, `${k}: ${objects[key][k]};\n`);
      });
    } catch (err) {
      console.error(err);
    } finally {
      fs.closeSync(scss);
    }
  });
}
