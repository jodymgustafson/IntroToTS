import { Point2D } from "../0.types/1-user-types";
import { Shape } from "../0.types/3-intersection-types";

//----------------------------------------~*~----------------------------------------//
// Generic interface, no type constraint

interface IList<T> {
    add(...value: T[]): void;
    first(findFn: (item: T) => boolean): T
}

//----------------------------------------~*~----------------------------------------//
// Generic class, with a default type

class List<T = string> implements IList<T> {
    private _list: T[] = [];

    add(...value: T[]): void {
        this._list.push(...value);
    }

    first(findFn: (item: T) => boolean): T {
        return this._list.find(findFn);
    }
}

const stringList = new List();
stringList.add("foo", "bar", "baz");

const numberList = new List<number>();
numberList.add(-1, 0, 1, -3);
// find first negative number
console.log(numberList.first(n => n < 0));

//----------------------------------------~*~----------------------------------------//
// A generic class, constrained to a type

class PointList<T extends Point2D> {
    private _list: T[] = [];

    public add(...value: T[]): void {
        this._list.push(...value);
    }

    public first(findFn: (item: T) => boolean): T {
        for (const i of this._list) {
            if (findFn(i)) {
                return i;
            }
        }
    }
}

// If you don't specify a type, it will default to Point2D
const pointList = new PointList();
pointList.add(
    { x: 0, y: 0 },
    { x: 3, y: 3 },
    { x: -2, y: 3 },
    { x: 0, y: 1 },
);
// find first point with a negative x-value
console.log(pointList.first(p => p.x < 0));

// Will this work?
type Point3D = Point2D & {
    z: number
};
const point3dList = new PointList<Point3D>();
