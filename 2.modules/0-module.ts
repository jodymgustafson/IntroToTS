//----------------------------------------~*~----------------------------------------//
// Use export keyword to make items in the module accessible from outside the module

export type Point2D = {
    x: number;
    y: number;
};

export type Shape = {
    name: string;
    points: Point2D[];
    numberOfSides: number;
};

//----------------------------------------~*~----------------------------------------//
// Non-exported items can't be accessed from outside the module

const shapes: Shape[] = [];

function createShape(name: string, points: Point2D[]): Shape {
    return {
        name: name,
        points: points,
        numberOfSides: points.length
    };
}

export function addShape(shape: Shape): void {
    shapes.push(shape);
}

export function createAndAddShape(name: string, points: Point2D[]): Shape {
    const shape = createShape(name, points);
    addShape(shape);
    return shape;
}

//----------------------------------------~*~----------------------------------------//
// Or export all in one place using:
// export { Shape, addShape }
