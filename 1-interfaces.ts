// Interface has no corresponding construct in JS
interface IShape
{
    name: string;
    numberOfSides: number;
}

let shapes: IShape[] = [];

function addShape(shape: IShape): void
{
    shapes.push(shape);
}

let triangle: IShape = {
    name: "triangle",
    numberOfSides: 3
};

addShape(triangle);

// Do you think this will work?
let rectangle = {
    name: "rectangle",
    numberOfSides: 4,
    width: 10,
    height: 20
};
addShape(rectangle);


// Function interface
interface IShapeFilterFn {
    (shape: IShape): boolean;
}

function filterShapes1(filterFn: IShapeFilterFn): IShape[]
{
    return shapes.filter(filterFn);
}

let shapesWith3Sides = filterShapes1(function(shape: IShape) { return shape.numberOfSides === 3; });


// Inline function interface
function filterShapes2(filterFn: (shape: IShape) => boolean): IShape[]
{
    return shapes.filter(filterFn);
}

shapesWith3Sides = filterShapes2(function(shape: IShape) { return shape.numberOfSides === 3; });
