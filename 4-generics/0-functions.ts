import { Point2D } from "../0.types/1-user-types";

//----------------------------------------~*~----------------------------------------//
// Generic function, no type constraint

function parseJson<T>(json: string): T {
    return JSON.parse(json) as T;
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
function findPoints<T extends Point2D>(points: T[], x: number, y: number): T[] {
    return points.filter(point => point.x === x && point.y === y);
}

const points2d: Point2D[] = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
];

findPoints(points2d, 0, 0);


//----------------------------------------~*~----------------------------------------//

type Point3D = Point2D & {
    z: number
};
const points3d: Point3D[] = [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 1, y: 1, z: 1 },
];

findPoints(points3d, 0, 0);

//----------------------------------------~*~----------------------------------------//
// Quiz time: will this work?

const shapeNames: string[] = [ "triangle", "rectangle", "pentagon" ];
// findPoints(shapeNames, 0, 0);
