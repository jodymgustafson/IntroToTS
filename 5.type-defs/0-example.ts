//----------------------------------------~*~----------------------------------------//
// Standardized built-in APIs available in JavaScript runtimes

const n = parseInt("23", 10);
const sinPIOver2 = Math.sin(Math.PI / 2);
const date = new Date();

// Including declaration files for html elements

const myCanvas = document.querySelector<HTMLCanvasElement>("#my-canvas");
const canvas = document.getElementsByTagName("canvas");

//----------------------------------------~*~----------------------------------------//
// Nodejs type defs
// npm i --save-dev @types/node

import * as fs from "fs";

const buffer = fs.readFileSync("./file.data");
console.log(buffer.toString());
