import { Point2D } from "../0.types/1-user-types";

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
