import { Stagiaire } from "./Stagiaire";
import { Formation } from "./Formation";

const stagiaire1 = new Stagiaire("Doe", "John");
stagiaire1.calculerMoyenne([12, 15, 14]);
const stagiaire2 = new Stagiaire("Smith", "Jane");
stagiaire2.calculerMoyenne([16, 18, 17]);
const stagiaire3 = new Stagiaire("Brown", "Charlie");
stagiaire3.calculerMoyenne([10, 11, 9]);

const formation = new Formation("TypeScript MMI", 5, [stagiaire1, stagiaire2, stagiaire3]);

const notesParStagiaire = [
    [12, 15, 14], 
    [16, 18, 17], 
    [10, 11, 9]   
];

formation.afficherNomMax();

formation.afficherMinMax(notesParStagiaire);

formation.trouverMoyenneParNom("Smith");
formation.trouverMoyenneParNom("Doe");
formation.trouverMoyenneParNom("Brown");

console.log("Indice du meilleur stagiaire : " + formation.getIndexMax());