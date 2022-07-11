//----------------------------------------~*~----------------------------------------//
// A union type defines a type that can be one of many types

let u: string | number;
u = "a string";
u = 23;
//u = true; // error

//----------------------------------------~*~----------------------------------------//
// You can create union types that are enum-like sets

type ShapeName = "triangle" | "rectangle" | "pentagon";

type NumberOfSides = 3 | 4 | 5;

type Shape = {
    name: ShapeName;
    numberOfSides: NumberOfSides;
};

//----------------------------------------~*~----------------------------------------//
// Use unions in function type annotations

/**
 * Creates a shape given a shape name or number of sides
 */
function createShape(nameOrSides: ShapeName | NumberOfSides): Shape | undefined {
    // Sorry, no reflection in TypeScript
    if (typeof nameOrSides === "string") {
        // The compiler now knows this is of type ShapeName
        return createShapeFromName(nameOrSides);
    }
    else if (typeof nameOrSides === "number") {
        // The compiler now knows this is of type NumberOfSides
        return getShapeFromSides(nameOrSides);
    }
    else {
        return undefined;
    }
}

const rect = createShape("rectangle");
const triangle = createShape(3);

//----------------------------------------~*~----------------------------------------//

function createShapeFromName(name: ShapeName): Shape {
    switch (name) {
        case "triangle": return { name: "triangle", numberOfSides: 3 };
        case "rectangle": return { name: "rectangle", numberOfSides: 4 };
        case "pentagon": return { name: "pentagon", numberOfSides: 5 };
        // case "hexagon": return { name: name, numberOfSides: 6 };
        default: throw RangeError("Invalid shape name: " + name);
    }
}

function getShapeFromSides(sides: NumberOfSides): Shape {
    switch (sides) {
        case 3: return { name: "triangle", numberOfSides: sides };
        case 4: return { name: "rectangle", numberOfSides: sides };
        case 5: return { name: "pentagon", numberOfSides: sides };
        // case 6: return { name: "hexagon", numberOfSides: sides };
        default: throw RangeError("Invalid number of sides: " + sides);
    }
}


export { ShapeName, NumberOfSides }