"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const url = require("url");
const baseUrl = "https://api.figma.com/v1/files/";
/**
 * Returns a promise that resolves to the raw JSON from a Figma file.
 * Requires a Figma developer token and the ID of the file in question.
 */
function getFigmaRaw(token, fileId) {
    let request = url.parse(`${baseUrl}${fileId}`);
    request.headers = {
        "User-Agent": "request",
        "X-Figma-Token": token
    };
    return new Promise((resolve, reject) => {
        https.get(request, res => {
            console.log("Status code: ", res.statusCode);
            console.log("Headers: ", res.headers);
            res.on("err", err => {
                reject(err);
            });
            let data;
            res.on("data", chunk => {
                data += chunk;
            });
            res.on("end", chunk => {
                // For some reason the response starts with "undefined"
                // After that's stripped out, it can be parsed as regular JSON.
                resolve(JSON.parse(data.replace("undefined", "")));
            });
        });
    });
}
exports.getFigmaRaw = getFigmaRaw;
//# sourceMappingURL=getFigma.js.map