export class Point {
    private abs: number;
    private ord: number;

    constructor(private _abs: number, private _ord: number) {
        this.abs = _abs ;
        this.ord = _ord ;
    }

    getabs() : number {
        return this._abs;
    }

    getord() : number {
        return this._ord;
    }

    CalculerDistance(p: Point) : number {
        return Math.sqrt(Math.pow((this.abs - p.abs), 2) + Math.pow((this.ord - p.ord), 2));
    }

    static distance(x1: number, y1: number, x2: number, y2: number) : number {
        return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1), 2));
    }

    calculerMilieu(p: Point) : Point {
        let milieuX = (this.abs + p.abs) / 2;
        let milieuY = (this.ord + p.ord) / 2;
        return new Point(milieuX, milieuY);
    }
}