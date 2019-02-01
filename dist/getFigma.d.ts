/**
 * Returns a promise that resolves to the raw JSON from a Figma file.
 * Requires a Figma developer token and the ID of the file in question.
 */
export declare function getFigmaRaw(token: string, fileId: string): Promise<{}>;
