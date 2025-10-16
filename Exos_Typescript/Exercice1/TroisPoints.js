"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = void 0;
var TroisPoints = /** @class */ (function () {
    function TroisPoints(p1, p2, p3) {
        this.premier = p1;
        this.deuxieme = p2;
        this.troisieme = p3;
    }
    TroisPoints.prototype.getPremier = function () {
        return this.premier;
    };
    TroisPoints.prototype.getDeuxieme = function () {
        return this.deuxieme;
    };
    TroisPoints.prototype.getTroisieme = function () {
        return this.troisieme;
    };
    TroisPoints.prototype.TesterAlignement = function () {
        var AB = this.premier.CalculerDistance(this.deuxieme);
        var AC = this.premier.CalculerDistance(this.troisieme);
        var BC = this.deuxieme.CalculerDistance(this.troisieme);
        return (AB + AC === BC) || (AB + BC === AC) || (AC + BC === AB);
    };
    TroisPoints.prototype.EstIsocele = function () {
        var AB = this.premier.CalculerDistance(this.deuxieme);
        var AC = this.premier.CalculerDistance(this.troisieme);
        var BC = this.deuxieme.CalculerDistance(this.troisieme);
        if (this.TesterAlignement()) {
            return false;
        }
        else {
            return (AB === AC) || (AB === BC) || (AC === BC);
        }
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
