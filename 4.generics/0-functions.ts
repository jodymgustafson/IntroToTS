import { Point2D } from "../0.types/1-user-types";

//----------------------------------------~*~----------------------------------------//
// Generic functions

function parseJson(json: string): Point2D {
    return JSON.parse(json) as Point2D;
}

function parseJsonGeneric<T>(json: string): T {
    return JSON.parse(json) as T;
}

const point1 = parseJsonGeneric<Point2D>(`{"x": 0, "y": 0}`);
