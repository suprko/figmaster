import https from "https";
import url from "url";
const baseUrl = "https://api.figma.com/v1/files/";

/**
 * Returns a promise that resolves to the raw JSON from a Figma file.
 * Requires a Figma developer token and the ID of the file in question.
 */
export function getFigmaRaw(token: string, fileId: string) {
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
