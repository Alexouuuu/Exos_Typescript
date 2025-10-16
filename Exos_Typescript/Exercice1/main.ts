import { Point } from "./Point";
import { TroisPoints } from "./TroisPoints";

const A = new Point(1,2);
const B = new Point(2,4);
const C = new Point(3,6);

const AB = A.CalculerDistance(B);
console.log("Distance AB : " + AB);

const AC = A.CalculerDistance(C);
console.log("Distance AC : " + AC);

const BC = B.CalculerDistance(C);
console.log("Distance BC : " + BC);

const milieuAB = A.calculerMilieu(B);
console.log("Milieu de AB : (" + milieuAB.getabs() + ", " + milieuAB.getord() + ") ");

const milieuAC = A.calculerMilieu(C);
console.log("Milieu de AC : (" + milieuAC.getabs() + ", " + milieuAC.getord() + ") ");

const milieuBC = B.calculerMilieu(C);
console.log("Milieu de BC : (" + milieuBC.getabs() + ", " + milieuBC.getord() + ") ");

const triangle = new TroisPoints(A,B,C);

const isIsocele = triangle.EstIsocele();
console.log("Le triangle est isocèle ? " + isIsocele);

const estAligné =  triangle.TesterAlignement();
console.log("Les points sont alignés ? " + estAligné);