import { Point2D } from "../0.types/1-user-types";

//----------------------------------------~*~----------------------------------------//
// Interfaces and type aliases are very similar
// Type aliases are interchangeable with interfaces

interface IShape {
    name: string;
    numberOfSides: number;
    points: Point2D[];
    getArea(): number;
}

// Interfaces use extend, types use intersection

interface IRectangle extends IShape {
    width: number;
    height: number;
    isSquare(): boolean;
}

export { IShape }
