import { Point2D } from "./1-user-types";

// Intersection types allow you to combine types

export type Point3D = Point2D & {
    z: number;
};

export function projectTo2D(pnt: Point3D, d: number): Point2D {
    return {
        x: pnt.x / (pnt.z / d),
        y: pnt.y / (pnt.z / d)
    };
}

const p3d: Point3D = {
    x: 1,
    y: 2,
    z: 3
};
p3d

const p2d = projectTo2D(p3d, 1);
p2d