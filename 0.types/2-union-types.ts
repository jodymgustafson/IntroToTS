import { Point2D } from "./1-user-types";

let u: string | number;
u = "string";
u = 4;
//u = true; // error

//----------------------------------------~*~----------------------------------------//

// You can create union types that are enum-like sets
type ShapeName = "triangle" | "rectangle" | "pentagon";

type NumberOfSides = 3 | 4 | 5;

export type Shape = {
    name: ShapeName;
    numberOfSides: NumberOfSides;
    points?: Point2D[];
    getArea?: () => number;
};

//----------------------------------------~*~----------------------------------------//

// Use unions in type annotations
function getShape(nameOrSides: ShapeName | NumberOfSides): Shape | undefined {
    if (typeof nameOrSides === "string") {
        // The compiler now knows this is of type ShapeName
        return getShapeByName(nameOrSides);
    }
    else if (typeof nameOrSides === "number") {
        // The compiler now knows this is of type NumberOfSides
        return getShapeSides(nameOrSides);
    }
    else {
        return undefined;
    }
} 

function getShapeByName(name: ShapeName): Shape {
    switch (name) {
        case "triangle": return { name: "triangle", numberOfSides: 3 };
        case "rectangle": return { name: "rectangle", numberOfSides: 4 };
        case "pentagon": return { name: "pentagon", numberOfSides: 5 };
        // case "hexagon": return { name: name, numberOfSides: 6 };
        default: throw RangeError("Invalid shape name: " + name);
    }
}
function getShapeSides(sides: NumberOfSides): Shape {
    switch (sides) {
        case 3: return { name: "triangle", numberOfSides: sides };
        case 4: return { name: "rectangle", numberOfSides: sides };
        case 5: return { name: "pentagon", numberOfSides: sides };
        // case 6: return { name: "hexagon", numberOfSides: sides };
        default: throw RangeError("Invalid number of sides: " + sides);
    }
}

console.log(getShape("rectangle"));

console.log(getShape(3));
