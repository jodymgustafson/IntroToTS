//----------------------------------------~*~----------------------------------------//
// Built in type defs for html elements

const myCanvas = document.querySelector<HTMLCanvasElement>("#my-canvas");

const canvas = document.getElementsByTagName("canvas");

//----------------------------------------~*~----------------------------------------//
// Nodejs type defs
// npm i --save-dev @types/node

import * as fs from "fs";

const buffer = fs.readFileSync("./file.data");
console.log(buffer.toString());
