//----------------------------------------~*~----------------------------------------//
// Type Aliases or "user defined types"

// Inline type declaration
let pnt1: { x: number; y: number; };
pnt1 = {
    x: 1, y: 2
};

// Convert it to a type alias
export type Point2D = {
    x: number;
    y: number;
};
const pnt2: Point2D = {
    x: 1, y: 2
};

//----------------------------------------~*~----------------------------------------//
// Type aliases can contain any type of fields, including functions
type Shape = {
    name: string;
    numberOfSides: number;
    // Use a ? to specify optional fields
    points?: Point2D[];
    getArea?: () => number;
};

// Using type annotation is strict
const p1: Point2D = {
    x: 1,
    y: 2,
    // ERROR: z isn't a member of Point2D
    // z: 3
};

// While using "as" is more lenient (structural)
const p2 = {
    x: 1,
    y: 2,
    // z isn't a member of Point2D, but that's ok ;)
    z: 3
} as Point2D;

//----------------------------------------~*~----------------------------------------//

const shapes: Shape[] = [];

function addShape(shape: Shape): void {
    shapes.push(shape);
}

const triangle: Shape = {
    name: "triangle",
    numberOfSides: 3,
    points: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
    ],
};

addShape(triangle);

//----------------------------------------~*~----------------------------------------//

// Will this work?
const rectangle = {
    name: "rectangle",
    numberOfSides: 4,
    width: 10,
    height: 20,
    getArea: () => 10 * 20
};

addShape(rectangle);

// The compiler only cares that it has the expected properties.
// Being concerned only with the structure and capabilities of types
// is what we call a structurally typed type system.

//----------------------------------------~*~----------------------------------------//
// Function Types

// Inline function type
function filterShapes1(shapes: Shape[], filterFn: (shape: Shape) => boolean): Shape[] {
    return shapes.filter(filterFn);
}

const triangles = filterShapes1(shapes, shape => shape.numberOfSides === 3);
console.log(triangles);

//----------------------------------------~*~----------------------------------------//

// Create type alias for the function parameter
type ShapeFilterFn = (shape: Shape) => boolean;

function filterShapes2(shapes: Shape[], filterFn: ShapeFilterFn): Shape[] {
    return shapes.filter(filterFn);
}

const rectangles = filterShapes2(shapes, shape => shape.numberOfSides === 4);
console.log(rectangles);
