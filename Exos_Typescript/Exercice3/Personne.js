"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, sexe, adresse) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.getSexe = function () {
        return this.sexe;
    };
    Personne.prototype.setSexe = function (sexe) {
        this.sexe = sexe;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    return Personne;
}());
exports.Personne = Personne;
