# Figmaster

**Current status: extremely WIP.** Not working yet. Everything is likely to change.

Use a Figma document as a source of truth in your design process. Convert Figma files to design tokens. Deploy to Sass and/or some kinds of styled-in-JS libraries...?

Inspired by [Figmagic](https://github.com/mikaelvesavuori/figmagic).

## Usage

Install as a `node_module`? Direct from GitHub or npm package? Or include as folder in monorepo?

In your project folder, create a Figmaster source folder, e.g. `.figmaster`. Then place your Figma access token in that folder in a file named `token` and your file ID in `fileId`. You should probably `.gitignore` both of these files, probably the entire folder, definitely at the very least your `token`.

In `package.json`, you'll need to add some config stuff and scripts, which adds CLI commands based on the path to your Figmaster source folder and the Figmaster module folder. It might look something like this:

```
  "config": {
    "figmasterModule": "node_modules/figmaster",
    "figmasterSource": ".figmaster"
  },
  "scripts": {
    "build": "tsc",
    "clean": "rm -rf dist/",
    "figmaster:saveFigmaJson": "node $npm_package_config_figmasterModule/commands/saveFigmaJson.js $(cat $npm_package_config_figmasterSource/token) $(cat $npm_package_config_figmasterSource/fileId)"
  },

```

## Status

- [x] fetch raw JSON from Figma
- [x] save JSON into file
- [] parse JSON to keep only the properties we want
- [x] write JSON into SCSS object
