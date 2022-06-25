// Interface has no corresponding construct in JS
export interface IShape {
    name: string;
    numberOfSides: number;
}

const shapes: IShape[] = [];

// Function interface
interface IShapeFilterFn {
    (shape: IShape): boolean;
}

function filterShapes1(filterFn: IShapeFilterFn): IShape[] {
    return shapes.filter(filterFn);
}

let shapesWith3Sides = filterShapes1(function (shape: IShape) { return shape.numberOfSides === 3; });


// Inline function interface
function filterShapes2(filterFn: (shape: IShape) => boolean): IShape[] {
    return shapes.filter(filterFn);
}

shapesWith3Sides = filterShapes2(function (shape: IShape) { return shape.numberOfSides === 3; });
