"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(intitulé, nbrJours, stagiaires) {
        this.intitulé = intitulé;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    Formation.prototype.getIntitulé = function () {
        return this.intitulé;
    };
    Formation.prototype.getNbrJours = function () {
        return this.nbrJours;
    };
    Formation.prototype.getStagiaires = function () {
        return this.stagiaires;
    };
    Formation.prototype.calculerMoyenneFormation = function (notesParStagiaire) {
        var sommeMoyennes = 0;
        for (var i = 0; i < this.stagiaires.length; i++) {
            var moyenneStagiaire = this.stagiaires[i].calculerMoyenne(notesParStagiaire[i]);
            sommeMoyennes += moyenneStagiaire;
        }
        return sommeMoyennes / this.stagiaires.length;
    };
    Formation.prototype.getIndexMax = function () {
        var indiceMax = 0;
        var maxMoyenne = this.stagiaires[0].getMoyenne();
        for (var i = 1; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].getMoyenne() > maxMoyenne) {
                maxMoyenne = this.stagiaires[i].getMoyenne();
                indiceMax = i;
            }
        }
        return indiceMax;
    };
    Formation.prototype.afficherNomMax = function () {
        var indexMax = this.getIndexMax();
        var stagiaireMax = this.stagiaires[indexMax];
        console.log("Le stagiaire avec la meilleure moyenne est : " + stagiaireMax.getMoyenne() + " " + stagiaireMax.getNom() + " " + stagiaireMax.getPrenom());
    };
    Formation.prototype.afficherMinMax = function (notesParStagiaire) {
        var indexMax = this.getIndexMax();
        var stagiaireMax = this.stagiaires[indexMax];
        var notesDuStagiaireMax = notesParStagiaire[indexMax];
        var minNote = stagiaireMax.trouverMin(notesDuStagiaireMax);
        console.log("La note minimale du stagiaire avec la meilleure moyenne est : " + minNote);
    };
    Formation.prototype.trouverMoyenneParNom = function (nom) {
        for (var _i = 0, _a = this.stagiaires; _i < _a.length; _i++) {
            var stagiaire = _a[_i];
            if (stagiaire.getNom() === nom) {
                console.log("La moyenne de " + nom + " est : " + stagiaire.getMoyenne());
                return;
            }
        }
        console.log("Pas de stagiaire avec ce nom.");
    };
    return Formation;
}());
exports.Formation = Formation;
