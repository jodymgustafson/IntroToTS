//----------------------------------------~*~----------------------------------------//
// Interfaces and type aliases are very similar
// In most cases types aliases are interchangeable with interfaces

export interface IPoint2D {
    x: number;
    y: number;
}

//----------------------------------------~*~----------------------------------------//
// Use extends to extend an interface

export interface IPoint3D extends IPoint2D {
    z: number;
}

export interface IShape {
    name: string;
    numberOfSides: number;
    // Use a ? to specify optional fields
    points?: IPoint2D[];
    getArea?: () => number;
}

const shapes: IShape[] = [];

shapes.push({
    name: "triangle",
    numberOfSides: 3
});
