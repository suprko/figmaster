"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const url = require("url");
const baseUrl = "https://api.figma.com/v1/files/";
// module.exports = function(token) {};
/**
 * Gets the raw JSON from a Figma file.
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
                resolve(data);
            });
        });
    });
}
exports.getFigmaRaw = getFigmaRaw;
