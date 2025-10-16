import { Personne } from "./Personne";
import { Adresse } from "./Adresse";

export class ListePersonnes {
    private personnes : Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

    getPersonnes() : Personne[] {
        return this.personnes;
    }
    setPersonnes(personnes: Personne[]) : void {
        this.personnes = personnes;
    }

    findByNom(s: string ) : Personne | null {
        for (const personne of this.personnes) {
            if (personne.getNom() === s) {
                return personne;
            }
        }
        return null;
    }

    findByCodePostal(cp: string) : boolean {
        for (const personne of this.personnes) {
            for (const adresse of personne.getAdresse()) {
                if (adresse.getCodePostal() === cp) {
                    return true;
                }
            }
        }
        return false;
    }

    countPersonneVille(ville: string) : number {
        let count = 0;
        for (const personne of this.personnes) {
            for (const adresse of personne.getAdresse()) {
                if (adresse.getVille() === ville) {
                    count ++;
                    break;
                }
            }
        }
        return count;
    }

    editPersonneNom(oldNom: string, newNom: string) : void {
        for (const personne of this.personnes) {
            if (personne.getNom() === oldNom) {
                personne.setNom(newNom);
            }
        }
    }

    editPersonneVille(nom: string, newVille: string) : void {
        for (const personne of this.personnes) {
            if (personne.getNom() === nom) {
                for (const adresse of personne.getAdresse()) {
                    adresse.setVille(newVille);
                }
            }
        }
    }
}