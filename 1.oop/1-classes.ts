import { Point2D } from "../0.types/1-user-types";
import { IShape } from "./0-interfaces";

//----------------------------------------~*~----------------------------------------//
// Note: default access for class members is public

abstract class Shape implements IShape {
    private _name: string;
    points: Point2D[];

    constructor(name: string, points: Point2D[]) {
        this._name = name;
        this.points = points;
    }

    get name(): string {
        return this._name;
    }

    get numberOfSides(): number {
        return this.points.length;
    }

    abstract getArea(): number;

    toString(): string {
        return this.name;
    }

    // You can have static members too
    static getShapeName(shape: Shape): string {
        switch (shape.numberOfSides) {
            case 3: return "triangle";
            case 4: return "rectangle";
            case 5: return "pentagon";
            default: return "unknown";
        }
    }
}

//----------------------------------------~*~----------------------------------------//

class Rectangle extends Shape {
    constructor(points: Point2D[]) {
        super("rectangle", points);
    }

    /** @override */
    get name(): string {
        return this.isSquare() ? "square" : super.name;
    }

    /** @override */
    toString(): string {
        return `${super.toString()} (${this.width} x ${this.height})`;
    }

    // implement the abstract method
    getArea(): number {
        return this.width * this.height;
    }

    get width(): number {
        return Math.abs(this.points[0].x - this.points[2].x);
    }

    get height(): number {
        return Math.abs(this.points[0].y - this.points[2].y);
    }

    isSquare(): boolean {
        return this.width === this.height;
    }
}

//----------------------------------------~*~----------------------------------------//
// Example

const points: Point2D[] = [
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 0 },
];
const rectangle = new Rectangle(points);

// Call a static method
const shapeName = Shape.getShapeName(rectangle);

//----------------------------------------~*~----------------------------------------//

export {}