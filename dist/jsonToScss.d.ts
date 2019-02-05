import { FigmaObject } from "./interfaces";
/**
 * Take parsed JSON from Figma, write into individual SCSS files.
 * @param objects Array of objects with properties pulled from Figma.
 * @param folder Path to the folder you want to write.
 */
export declare function jsonToScss(objects: {
    [key: string]: FigmaObject;
}, writeFolder: string): void;
