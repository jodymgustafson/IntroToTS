import { IPoint2D, IShape } from "./0-interfaces";

//----------------------------------------~*~----------------------------------------//
// Note: default access for class members is public

abstract class Shape implements IShape {
    private _name: string;
    protected _points?: IPoint2D[];

    constructor(name: string, points: IPoint2D[]) {
        this._name = name;
        this._points = points;
    }

    get name(): string {
        return this._name;
    }

    get numberOfSides(): number {
        return this._points.length;
    }

    get points(): IPoint2D[] {
        return this._points;
    }
    set points(p: IPoint2D[]) {
        this._points = p;
    }

    abstract getArea(): number;

    translate(dx: number, dy: number): void {
        for (const p of this.points) {
            p.x += dx;
            p.y += dy;
        }
    }

    toString(): string {
        return this.name;
    }
}

//----------------------------------------~*~----------------------------------------//

class Triangle extends Shape {
    constructor(points: [IPoint2D, IPoint2D, IPoint2D]) {
        super("triangle", points);
    }

    getArea(): number {
        const p1 = this.points[0];
        const p2 = this.points[1];
        const p3 = this.points[2];
        return .5 * Math.abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y))
    }
}

//----------------------------------------~*~----------------------------------------//

class Rectangle extends Shape {
    constructor(points: [IPoint2D, IPoint2D, IPoint2D, IPoint2D]) {
        super("rectangle", points);
    }

    get width(): number {
        return Math.abs(this.points[0].x - this.points[2].x);
    }

    get height(): number {
        return Math.abs(this.points[0].y - this.points[2].y);
    }

    /** @override */
    get name(): string {
        return this.isSquare() ? "square" : super.name;
    }

    /** @override */
    toString(): string {
        return `${super.toString()} (${this.width} x ${this.height})`;
    }

    getArea(): number {
        return this.width * this.height;
    }

    isSquare(): boolean {
        return this.width === this.height;
    }
}

//----------------------------------------~*~----------------------------------------//

const shapes: IShape[] = [];

shapes.push(new Triangle([
    { x: 0, y: 0},
    { x: 0, y: 2},
    { x: 3, y: 0},
]));

const w = 3;
const h = 2;

shapes.push(new Rectangle([
    { x: 0, y: 0},
    { x: 0, y: h},
    { x: w, y: h},
    { x: w, y: 0}
]));

console.log(shapes[0].toString());
console.log(shapes[0].getArea());

console.log(shapes[1].toString());
console.log(shapes[1].getArea());
console.log((shapes[1] as Rectangle).isSquare());

export {}