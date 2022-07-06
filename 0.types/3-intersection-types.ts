import { Point2D } from "./1-user-types";
import { Shape } from "./2-union-types";

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

//----------------------------------------~*~----------------------------------------//
// Intersection types allow you to extend types

export type Point3D = Point2D & {
    z: number;
};

export function projectTo2D(pnt: Point3D, distance: number): Point2D {
    return {
        x: pnt.x / (pnt.z / distance),
        y: pnt.y / (pnt.z / distance)
    };
}

const p3d: Point3D = {
    x: 1,
    y: 2,
    z: 3
};

console.log(projectTo2D(p3d, 1));

//----------------------------------------~*~----------------------------------------//
// Intersection types let you override field types

// Let's restrict the name and number of sides
export type Triangle = Shape & {
    name: "triangle",
    numberOfSides: 3
};

export type Rectangle = Shape & {
    name: "rectangle",
    numberOfSides: 4,
    // (add some fields not in shape...)
    width: number;
    height: number;
    isSquare?: () => boolean
};

/**
 * Factory function to create a rectangle
 * @param points 4 corner points
 * @returns A rectangle object
 */
function getRectangle(points: Point2D[]): Rectangle {
    if (points.length !== 4) {
        throw new Error("A rectangle must have 4 sides");
    }

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

const rect = getRectangle([
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 0 },
]);

console.log(rect)

console.log(rect.getArea());

console.log(rect.isSquare());
