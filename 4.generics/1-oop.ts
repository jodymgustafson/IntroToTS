//----------------------------------------~*~----------------------------------------//
// Generic class

class List<T> {
    private _list: T[] = [];

    add(...value: T[]): void {
        this._list.push(...value);
    }

    first(findFn: (item: T) => boolean): T {
        return this._list.find(findFn);
    }
}

const stringList = new List<string>();
stringList.add("foo", "bar", "baz");

const numberList = new List<number>();
numberList.add(-1, 0, 1, -3);
