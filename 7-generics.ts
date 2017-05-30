namespace IntroToTS
{
    // Generic function
    function parseJson<T>(json: string): T
    {
        return <T>JSON.parse(json);
    }

    var point = parseJson<IPoint2D>("{'x': 0, 'y': 0}");

    // function parseJson(json: string): IPoint2D
    // {
    //     return <IPoint2D>JSON.parse(json);
    // }


    // Generic class
    class List<T>
    {
        private _list: T[] = [];

        public add(...value: T[]): void
        {
            this._list.push(...value);
        }

        public first(findFn: (item: T) => boolean): T
        {
            for (var i of this._list)
            {
                if (findFn(i))
                {
                    return i;
                }
            }

            return null;
        }
    }

    var list = new List<number>();
    list.add(-1, 0, 1);
    // find first negative number
    var first = list.first(n => n < 0);


    // A generic class typed to T which is constrained to an interface
    class Point2DList<T extends IPoint2D>
    {
        private _list: T[] = [];

        public add(...value: T[]): void
        {
            this._list.push(...value);
        }
        
        public first(findFn: (item: T) => boolean): T
        {
            for (var i of this._list)
            {
                if (findFn(i))
                {
                    return i;
                }
            }

            return null;
        }
    }

    var list2 = new Point2DList<Point2D>();
    var first2 = list2.first(p => p.x < 0);
}