import { Point2D } from "./1-user-types";
import { Rectangle } from "./3-intersection-types";

// Tuple types allow you to express an array with a fixed number of elements whose types are known

// Let's lock down the points that can be used to create a rectangle
export function getRectangle(points: [Point2D, Point2D, Point2D, Point2D]): Rectangle {
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
    // { x: 0, y: 0 }, // ERROR
]);

console.log(rect)

console.log(rect.getArea());

console.log(rect.isSquare());

//----------------------------------------~*~----------------------------------------//
// Tuples are handy for returning more than one value

/**
 * Splits a file path into path and file name
 * @param filePath A file path
 * @returns A tuple with the path at index 0 and file name at index 1
 */
function splitFilePath(filePath: string): [string, string] {
    const idx = filePath.lastIndexOf("/");
    const path = filePath.slice(0, idx);
    const filename = filePath.slice(idx + 1);
    return [ path, filename ];
}

console.log(splitFilePath("c:/path/to/my/file.txt"));
