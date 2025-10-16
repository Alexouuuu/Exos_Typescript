import { Point } from "./Point";

export class TroisPoints {
    private premier : Point;
    private deuxieme : Point;
    private troisieme : Point;

    constructor(p1: Point, p2: Point, p3: Point) {
        this.premier = p1;
        this.deuxieme = p2;
        this.troisieme = p3;
    }

    getPremier() : Point {
        return this.premier;
    }
    getDeuxieme() : Point {
        return this.deuxieme;
    }
    getTroisieme() : Point {
        return this.troisieme;
    }
    
    TesterAlignement() : boolean {
        const AB = this.premier.CalculerDistance(this.deuxieme);
        const AC = this.premier.CalculerDistance(this.troisieme);
        const BC = this.deuxieme.CalculerDistance(this.troisieme);

        return (AB + AC === BC) || (AB + BC === AC) || (AC + BC === AB);
    }

    EstIsocele() : boolean {
        const AB = this.premier.CalculerDistance(this.deuxieme);
        const AC = this.premier.CalculerDistance(this.troisieme);
        const BC = this.deuxieme.CalculerDistance(this.troisieme);

        if (this.TesterAlignement()) {
            return false; 
        } else {
            return (AB === AC) || (AB === BC) || (AC === BC);
        }
    }
}