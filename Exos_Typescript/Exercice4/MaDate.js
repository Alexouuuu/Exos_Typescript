"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaDate = void 0;
var MaDate = /** @class */ (function () {
    function MaDate(jour, mois, annee) {
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }
    MaDate.prototype.getJour = function () {
        return this.jour;
    };
    MaDate.prototype.setJour = function (jour) {
        this.jour = jour;
    };
    MaDate.prototype.getMois = function () {
        return this.mois;
    };
    MaDate.prototype.setMois = function (mois) {
        this.mois = mois;
    };
    MaDate.prototype.getAnnee = function () {
        return this.annee;
    };
    MaDate.prototype.setAnnee = function (annee) {
        this.annee = annee;
    };
    MaDate.prototype.ajouterUnJour = function () {
        this.jour++;
        var maxJour = 31;
        if ([4, 6, 9, 11].indexOf(this.mois)) {
            maxJour = 30;
        }
        else if (this.mois === 2) {
            if ((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0)) { // vérifier si une année est bissextile ou non.
                maxJour = 29;
            }
            else {
                maxJour = 28;
            }
        }
        if (this.jour > maxJour) {
            this.jour = 1;
            this.mois++;
            if (this.mois > 12) {
                this.mois = 1;
                this.annee++;
            }
        }
    };
    MaDate.prototype.ajouterPlusieursJours = function (n) {
        for (var i = 0; i < n; i++) {
            this.ajouterUnJour();
        }
    };
    MaDate.prototype.ajouterUnMois = function () {
        this.mois++;
        if (this.mois > 12) {
            this.mois = 1;
            this.annee++;
        }
        var maxJour = 31;
        if ([4, 6, 9, 11].indexOf(this.mois)) {
            maxJour = 30;
        }
        else if (this.mois === 2) {
            if ((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0)) { // vérifier si une année est bissextile ou non.
                maxJour = 29;
            }
            else {
                maxJour = 28;
            }
        }
        if (this.jour > maxJour) {
            this.jour = maxJour;
        }
    };
    MaDate.prototype.ajouterUneAnnee = function () {
        this.annee++;
        if (this.mois === 2 && this.jour === 29 && !((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0))) {
            this.jour = 28;
        }
    };
    MaDate.prototype.afficher = function () {
        console.log(this.jour + "/" + this.mois + "/" + this.annee);
    };
    return MaDate;
}());
exports.MaDate = MaDate;
