import https from "https";
import url from "url";
const baseUrl = "https://api.figma.com/v1/files/";

/**
 * Get the raw JSON content from a Figma file.
 *
 * @param {string} token Figma developer token.
 * @param {string} fileId File ID from the file's Figma URL.
 * @returns Promise that resolves to the raw JSON from a Figma file.
 */
export function getFigmaRawJson(token: string, fileId: string) {
  let requestOptions = url.parse(`${baseUrl}${fileId}`) as https.RequestOptions;
  requestOptions.headers = {
    "User-Agent": "request",
    "X-Figma-Token": token
  };

  return new Promise((resolve, reject) => {
    https.get(requestOptions, res => {
      console.log("Status code: ", res.statusCode);
      console.log("Headers: ", res.headers);

      res.on("err", err => {
        reject(err);
      });

      let data: string;
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
