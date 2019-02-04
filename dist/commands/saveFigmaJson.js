"use strict";
/**
 * Save Figma JSON into its own file, passing in token and file ID via command line arguments.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFigma_1 = require("../getFigma");
const fs_1 = __importDefault(require("fs"));
const token = process.argv[2];
const fileId = process.argv[3];
getFigma_1.getFigmaRawJson(token, fileId).then(res => {
    try {
        fs_1.default.writeFileSync(".figmaster/figma.json", JSON.stringify(res, null, 2));
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=saveFigmaJson.js.map