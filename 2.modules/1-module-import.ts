﻿//----------------------------------------~*~----------------------------------------//
// Import individual items

import { addShape, createAndAddShape, Point2D } from "./0-module";

const points: Point2D[] = [
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 0 },    
];

addShape({
    name: "rectangle",
    numberOfSides: 4,
    points: points
});

createAndAddShape("rectangle", points);
