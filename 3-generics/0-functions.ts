import { Point2D } from "../0.types/1-user-types";

//----------------------------------------~*~----------------------------------------//
// Generic function, no type constraint

function parseJson<T>(json: string): T {
    return JSON.parse(json);
}

const point1 = parseJson<Point2D>(`{"x": 0, "y": 0}`);
const point2: Point2D = parseJson(`{"x": 0, "y": 0}`);
const point3 = parseJson(`{"x": -1, "y": -1}`) as Point2D;
// Without a type specifier it is unknown
const something = parseJson(`{"x": -1, "y": -1}`);

//----------------------------------------~*~----------------------------------------//
// Generic function, with type constraint

/**
 * Find points that have the specified coordinates
 */
function findPoints2D<T extends Point2D>(points: T[], x: number, y: number): T[] {
    return points.filter(point => point.x === x && point.y === y);
}

const points = [ point1, point2, point3 ];
console.log(findPoints2D(points, 0, 0));

// Will this work?
const points2 = [ point1, point2, point3, something ];
// console.log(findPoints2D(points2, 0, 0));

// Will this work?
type Point3D = Point2D & {
    z: number
};
const points3: Point3D[] = [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 1, y: 1, z: 1 },
 ];
// console.log(findPoints2D(points3, 0, 0));
