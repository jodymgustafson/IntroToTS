//----------------------------------------~*~----------------------------------------//
// Or, Import everything using an alias

import * as Shapes from "./0-module";

const points: Shapes.Point2D[] = [
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 0 },    
];

// A module is like having a static class

Shapes.addShape({
    name: "rectangle",
    numberOfSides: 4,
    points: points
});

Shapes.createAndAddShape("rectangle", points);
