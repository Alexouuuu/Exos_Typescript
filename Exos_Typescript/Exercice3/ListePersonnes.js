"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    ListePersonnes.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    ListePersonnes.prototype.findByNom = function (s) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.getNom() === s) {
                return personne;
            }
        }
        return null;
    };
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            for (var _b = 0, _c = personne.getAdresse(); _b < _c.length; _b++) {
                var adresse = _c[_b];
                if (adresse.getCodePostal() === cp) {
                    return true;
                }
            }
        }
        return false;
    };
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var count = 0;
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            for (var _b = 0, _c = personne.getAdresse(); _b < _c.length; _b++) {
                var adresse = _c[_b];
                if (adresse.getVille() === ville) {
                    count++;
                    break;
                }
            }
        }
        return count;
    };
    ListePersonnes.prototype.editPersonneNom = function (oldNom, newNom) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.getNom() === oldNom) {
                personne.setNom(newNom);
            }
        }
    };
    ListePersonnes.prototype.editPersonneVille = function (nom, newVille) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.getNom() === nom) {
                for (var _b = 0, _c = personne.getAdresse(); _b < _c.length; _b++) {
                    var adresse = _c[_b];
                    adresse.setVille(newVille);
                }
            }
        }
    };
    return ListePersonnes;
}());
exports.ListePersonnes = ListePersonnes;
