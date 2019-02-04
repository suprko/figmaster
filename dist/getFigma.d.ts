/**
 * Get the raw JSON content from a Figma file.
 *
 * @param {string} token Figma developer token.
 * @param {string} fileId File ID from the file's Figma URL.
 * @returns Promise that resolves to the raw JSON from a Figma file.
 */
export declare function getFigmaRaw(token: string, fileId: string): Promise<{}>;
