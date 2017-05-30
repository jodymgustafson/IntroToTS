interface IPoint2D
{
    x: number;
    y: number;
}

class Point2D implements IPoint2D
{
    public x: number;
    public y: number;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public toString(): string
    {
        return `Point: ${this.x}, ${this.y}`; // template literal
    }
}

var p1 = new Point2D(0, 0);
var p2 = new Point2D(10, 10);
var s1 = p1.toString(); // => "Point: 0, 0"


interface IPoint3D extends IPoint2D
{
    z: number;
}

class Point3D extends Point2D implements IPoint3D
{
    public z: number;

    constructor(x: number, y: number, z: number)
    {
        super(x, y);
        this.z = z;
    }

    // override
    public toString(): string
    {
        return `${super.toString()}, ${this.z}`;
    }
}

var p3 = new Point3D(10, 20, 30);
var s3 = p3.toString(); // => "Point: 10, 20, 30"
