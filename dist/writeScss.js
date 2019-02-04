"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/**
 * Take parsed JSON from Figma, write into individual SCSS files.
 * @param objects Array of objects with properties pulled from Figma.
 * @param folder Path to the folder you want to write.
 */
function writeScss(objects, writeFolder) {
    Object.keys(objects).forEach(key => {
        // Create empty SCSS file with this key's name (e.g. "colors.scss")
        let scss = fs_1.default.openSync(`${writeFolder}/${key}.scss`, "w");
        // For each key-value pair in this object, write a new line in the SCSS file representing 1 Sass variable
        try {
            Object.keys(objects[key]).forEach(k => {
                fs_1.default.appendFileSync(scss, `${k}: ${objects[key][k]};\n`);
            });
        }
        catch (err) {
            console.error(err);
        }
        finally {
            fs_1.default.closeSync(scss);
        }
    });
}
exports.writeScss = writeScss;
//# sourceMappingURL=writeScss.js.map