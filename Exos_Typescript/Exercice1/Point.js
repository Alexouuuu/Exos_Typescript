"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_abs, _ord) {
        this._abs = _abs;
        this._ord = _ord;
        this.abs = _abs;
        this.ord = _ord;
    }
    Point.prototype.getabs = function () {
        return this._abs;
    };
    Point.prototype.getord = function () {
        return this._ord;
    };
    Point.prototype.CalculerDistance = function (p) {
        return Math.sqrt(Math.pow((this.abs - p.abs), 2) + Math.pow((this.ord - p.ord), 2));
    };
    Point.distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };
    Point.prototype.calculerMilieu = function (p) {
        var milieuX = (this.abs + p.abs) / 2;
        var milieuY = (this.ord + p.ord) / 2;
        return new Point(milieuX, milieuY);
    };
    return Point;
}());
exports.Point = Point;
