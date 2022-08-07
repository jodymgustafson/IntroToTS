import { Point2D } from "../0.types/1-user-types";
const points: Point2D[] = [];

//----------------------------------------~*~----------------------------------------//
// Optional parameters can have default values or be undefined

function getMarkdown(title: string, content: string,
    author = "unknown", date?: Date): string {
    return `
        # ${title}
        ${content}
        ___
        Author: ${author} ${date?.toLocaleDateString()}
    `;
}

//----------------------------------------~*~----------------------------------------//
// Rest parameters are always arrays

function addPoints(...points: Point2D[]): void {
    for (const point of points) {
        addPoint(point);
    };
}

addPoints({ x: 0, y: 0}, { x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 });

//----------------------------------------~*~----------------------------------------//
// Function overloading

function addPoint(x: number, y: number): Point2D;

function addPoint(point: Point2D): void;

// The implementation is the union of all signatures

function addPoint(xOrPnt: number | Point2D, y?: number): Point2D | void {
    if (typeof xOrPnt === "number") {
        const point = {
            x: xOrPnt,
            y: y
        };
        this.points.push(point);
        return point;
    }
    else {
        this.points.push(xOrPnt);
    }
}

addPoint(0, 0);
addPoint({ x: 0, y: 0 });

//----------------------------------------~*~----------------------------------------//

export {}
