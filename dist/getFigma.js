"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const url_1 = __importDefault(require("url"));
const baseUrl = "https://api.figma.com/v1/files/";
/**
 * Get the raw JSON content from a Figma file.
 *
 * @param {string} token Figma developer token.
 * @param {string} fileId File ID from the file's Figma URL.
 * @returns Promise that resolves to the raw JSON from a Figma file.
 */
function getFigmaRawJson(token, fileId) {
    let requestOptions = url_1.default.parse(`${baseUrl}${fileId}`);
    requestOptions.headers = {
        "User-Agent": "request",
        "X-Figma-Token": token
    };
    return new Promise((resolve, reject) => {
        https_1.default.get(requestOptions, res => {
            console.log("Status code: ", res.statusCode);
            console.log("Headers: ", res.headers);
            res.on("err", err => {
                reject(err);
            });
            let data;
            res.on("data", chunk => {
                data += chunk;
            });
            res.on("end", () => {
                // For some reason the response starts with "undefined"
                // After that's stripped out, it can be parsed as regular JSON.
                resolve(JSON.parse(data.replace("undefined", "")));
            });
        });
    });
}
exports.getFigmaRawJson = getFigmaRawJson;
//# sourceMappingURL=getFigma.js.map