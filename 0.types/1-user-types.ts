// TypeScript user types or Type Aliases

let pnt1: { x: number; y: number; };

pnt1 = {
    x: 1, y: 2
};

export type Point2D = {
    x: number;
    y: number;
};

const pnt2: Point2D = {
    x: 1, y: 2
};


type Shape = {
    name: string;
    numberOfSides: number;
    points?: Point2D[];
};

export type ComplexNumber = {
    real: number;
    imaginary: number;
    toString: () => string;
};

// Using type annotation is strict
const p1: Point2D = {
    x: 1,
    y: 2,
    // z: 3
};

// While using "as" is more lenient (structural)
const p2 = {
    x: 1,
    y: 2,
    z: 3
} as Point2D;

// 3 + 2i
const myComplex: ComplexNumber = {
    real: 3,
    imaginary: 2,
    toString: () => "3 + 2i" 
};

// The compiler only cares that it has the expected properties.
// Being concerned only with the structure and capabilities of types
// is what we call a structurally typed type system.

const shapes: Shape[] = [];

function addShape(shape: Shape): void {
    shapes.push(shape);
}

const triangle: Shape = {
    name: "triangle",
    numberOfSides: 3
};

addShape(triangle);

// Will this work?
const rectangle = {
    name: "rectangle",
    numberOfSides: 4,
    width: 10,
    height: 20
};

addShape(rectangle);

// Function Types

// Inline function type
function filterShapes1(shapes: Shape[], filterFn: (shape: Shape) => boolean): Shape[] {
    return shapes.filter(filterFn);
}

let shapesWith3Sides = filterShapes1(shapes, shape => shape.numberOfSides === 3);

// Function type alias
type ShapeFilterFn = (shape: Shape) => boolean;

function filterShapes2(filterFn: ShapeFilterFn): Shape[] {
    return shapes.filter(filterFn);
}

shapesWith3Sides = filterShapes1(shape => shape.numberOfSides === 3);

