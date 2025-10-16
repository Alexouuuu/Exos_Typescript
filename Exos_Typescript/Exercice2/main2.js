"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stagiaire_1 = require("./Stagiaire");
var Formation_1 = require("./Formation");
var stagiaire1 = new Stagiaire_1.Stagiaire("Doe", "John");
stagiaire1.calculerMoyenne([12, 15, 14]);
var stagiaire2 = new Stagiaire_1.Stagiaire("Smith", "Jane");
stagiaire2.calculerMoyenne([16, 18, 17]);
var stagiaire3 = new Stagiaire_1.Stagiaire("Brown", "Charlie");
stagiaire3.calculerMoyenne([10, 11, 9]);
var formation = new Formation_1.Formation("TypeScript MMI", 5, [stagiaire1, stagiaire2, stagiaire3]);
var notesParStagiaire = [
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
