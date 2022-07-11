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

interface IRectangle extends IShape {
    width: number;
    height: number;
    isSquare(): boolean;
}

export { IShape }
