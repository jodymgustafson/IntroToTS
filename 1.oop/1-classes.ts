import { IPoint2D } from "./0-interfaces";

// Use implements to implement an interface

export class Point2D implements IPoint2D {
    // Note: default access is public
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return `Point: ${this.x}, ${this.y}`; // template literal
    }

}

const p1 = new Point2D(0, 0);
const p2 = new Point2D(10, 10);
console.log(p1.toString());

//----------------------------------------~*~----------------------------------------//
// Use extends to extend an interface

interface IPoint3D extends IPoint2D {
    z: number;
}

class Point3D extends Point2D implements IPoint3D {
    public z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    // @override
    public toString(): string {
        return `${super.toString()}, ${this.z}`;
    }
}

const p3 = new Point3D(10, 20, 30);
console.log(p3.toString());
