//----------------------------------------~*~----------------------------------------//
// Built in type defs for html elements

const myCanvas = document.querySelector<HTMLCanvasElement>("#my-canvas");

const canvas = document.getElementsByTagName("canvas");

//----------------------------------------~*~----------------------------------------//
// Nodejs type defs

import * as fs from "fs";

const buffer = fs.readFileSync("./file.data");
console.log(buffer.toString());

