//----------------------------------------~*~----------------------------------------//
// Type Aliases or "user defined types"

type Point2D = {
    x: number;
    y: number;
};

let pnt2: Point2D = {
    x: 1,
    y: 2,
    // z: 3 // ERROR
};

//----------------------------------------~*~----------------------------------------//
// Type aliases can use other type aliases and functions

type Shape = {
    name: string;
    numberOfSides: number;
    points: Point2D[];
};

const shapes: Shape[] = [];

//----------------------------------------~*~----------------------------------------//

function addShape(shape: Shape): void {
    shapes.push(shape);
}

let triangle: Shape = {
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
// Quiz time! Will this work?

let rectangle: any = {
    name: "rectangle",
    numberOfSides: 4,
    points: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: 0 },
    ],
    width: 10,
    height: 20
};

addShape(rectangle);

//----------------------------------------~*~----------------------------------------//
// Function Type Aliases

type ShapeFilterFn = (shape: Shape) => boolean;

// Define a filter function that satisfies the type
let filterRectanglesFn: ShapeFilterFn = (shape: Shape) => shape.numberOfSides === 4;

function filterShapes(shapes: Shape[], filterFn: ShapeFilterFn): Shape[] {
    return shapes.filter(filterFn);
}

const rectangles = filterShapes(shapes, filterRectanglesFn);

//----------------------------------------~*~----------------------------------------//

export { Point2D }