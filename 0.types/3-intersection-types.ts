import { Point2D } from "./1-user-types";
import { NumberOfSides, ShapeName } from "./2-union-types";

//----------------------------------------~*~----------------------------------------//
// Intersection types allow you to combine types

type Person = {
    firstName: string;
    lastName: string;
};

type Address = {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
};

type Customer = Person & Address;

const customer: Customer = {
    firstName: "Joe",
    lastName: "Cool",
    line1: "123 Main St.",
    city: "Traverse City",
    state: "MI",
    zip: "55555"
};

console.log(customer);

//----------------------------------------~*~----------------------------------------//
// Intersection types allow you to extend types

type Shape = {
    name: string;
    numberOfSides: number;
    points: Point2D[];
    getArea: () => number;
};

type RectangularShape = Shape & {
    width: number;
    height: number;
    isSquare: () => boolean
};

//----------------------------------------~*~----------------------------------------//
// Intersection types allow you override field types

type KnownShape = Shape & {
    name: ShapeName;
    numberOfSides: NumberOfSides;
};

// We can restrict fields to to constant values too
type Triangle = KnownShape & {
    name: "triangle",
    numberOfSides: 3
};
type Rectangle = KnownShape & RectangularShape & {
    name: "rectangle",
    numberOfSides: 4
};

//----------------------------------------~*~----------------------------------------//
// Example

/**
 * Factory function to create a rectangle
 * @param points 4 corner points
 * @returns A rectangle object
 */
function createRectangle(points: Point2D[]): Rectangle {
    const width = Math.abs(points[0].x - points[2].x);
    const height = Math.abs(points[0].y - points[2].y);

    return {
        name: "rectangle",
        numberOfSides: 4,
        points,
        width,
        height,
        getArea: () => width * height,
        isSquare: () => width === height
    };
}

const rect = createRectangle([
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 0 },
]);

export { Shape, Rectangle, Triangle }