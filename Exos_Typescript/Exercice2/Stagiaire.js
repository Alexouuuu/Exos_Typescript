"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.getPrenom = function () {
        return this.prenom;
    };
    Stagiaire.prototype.getMoyenne = function () {
        return this.Stagiaire_moy;
    };
    Stagiaire.prototype.calculerMoyenne = function (notes) {
        var somme = 0;
        for (var i = 0; i < notes.length; i++) {
            somme += notes[i];
        }
        this.Stagiaire_moy = somme / notes.length;
        return this.Stagiaire_moy;
    };
    Stagiaire.prototype.trouverMax = function (notes) {
        var max = notes[0];
        for (var i = 1; i < notes.length; i++) {
            if (notes[i] > max) {
                max = notes[i];
            }
        }
        return max;
    };
    Stagiaire.prototype.trouverMin = function (notes) {
        var min = notes[0];
        for (var i = 1; i < notes.length; i++) {
            if (notes[i] < min) {
                min = notes[i];
            }
        }
        return min;
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
