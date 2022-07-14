import { Point2D } from "../0.types/1-user-types";

//----------------------------------------~*~----------------------------------------//
// Generic functions

function parsePoint2DJson(json: string): Point2D {
    return JSON.parse(json) as Point2D;
}

function parseJson<T>(json: string): T {
    return JSON.parse(json) as T;
}

const point1 = parseJson<Point2D>(`{"x": 0, "y": 0}`);
const array = parseJson<string[]>(`["a", "b", "c"]`);
