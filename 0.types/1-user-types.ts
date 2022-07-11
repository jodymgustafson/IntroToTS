//----------------------------------------~*~----------------------------------------//
// Type Aliases or "user defined types"

// Inline type declaration
let pnt1: { x: number; y: number; };
pnt1 = {
    x: 1,
    y: 2
};

// Convert it to a type alias
type Point2D = {
    x: number;
    y: number;
};

let pnt2: Point2D;
pnt2 = {
    x: 1,
    y: 2
};

//----------------------------------------~*~----------------------------------------//
// Type aliases can use other type aliases and functions
// Use a ? to specify optional fields

type Shape = {
    name: string;
    numberOfSides: number;
    points?: Point2D[];
    getArea?: () => number;
};

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
// Quiz time!

const rectangle = {
    name: "rectangle",
    numberOfSides: 4,
    width: 10,
    height: 20,
    getArea: () => 10 * 20
};

// Will this work?
// addShape(rectangle);


//----------------------------------------~*~----------------------------------------//
// Function Types

// Create type alias for a function
type ShapeFilterFn = (shape: Shape, index: number) => boolean;

function filterShapes(shapes: Shape[], filterFn: ShapeFilterFn): Shape[] {
    return shapes.filter(filterFn);
}

const rectangles = filterShapes(shapes, (shape, index) => shape.numberOfSides === 4);

//----------------------------------------~*~----------------------------------------//

export { Point2D }