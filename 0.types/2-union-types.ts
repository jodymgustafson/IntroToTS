import { Point2D } from "./1-user-types";

let u: string | number;
u = "string";
u = 4;
//u = true; // error

// You can even create union types that are enum-like
type ShapeName = "triangle" | "square" | "pentagon";

type NumberOfSides = 3 | 4 | 5;

type Shape = {
    name: ShapeName;
    numberOfSides: NumberOfSides;
    points?: Point2D[];
};

function getShape(nameOrSides: ShapeName | NumberOfSides): Shape {
    if (typeof nameOrSides === "string") {
        // The compiler now knows this is of type ShapeName
        return getShapeByName(nameOrSides);
    }
    else {
        // The compiler now knows this is of type NumberOfSides
        return getShapeSides(nameOrSides);
    }
} 

function getShapeByName(name: ShapeName): Shape {
    switch (name) {
        case "triangle": return { name: name, numberOfSides: 3 };
        case "square": return { name: name, numberOfSides: 4 };
        case "pentagon": return { name: name, numberOfSides: 5 };
        // case "hexagon": return { name: name, numberOfSides: 6 };
    }
}
function getShapeSides(sides: NumberOfSides): Shape {
    switch (sides) {
        case 3: return { name: "triangle", numberOfSides: sides };
        case 4: return { name: "square", numberOfSides: sides };
        case 5: return { name: "pentagon", numberOfSides: sides };
        // case 6: return { name: "hexagon", numberOfSides: sides };
    }
}

const s1 = getShape("square");
s1

const s2 = getShape(3);
s2
