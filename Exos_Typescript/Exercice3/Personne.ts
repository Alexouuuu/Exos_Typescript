import { Adresse } from "./Adresse";

export class Personne {
    private nom : string;
    private sexe : string;
    private adresse : Adresse[];

    constructor(nom: string, sexe: string, adresse: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresse = adresse;
    }

    getNom() : string {
        return this.nom;
    }
    setNom(nom: string) : void {
        this.nom = nom;
    }
    getSexe() : string {
        return this.sexe;
    }
    setSexe(sexe: string) : void {
        this.sexe = sexe;
    }
    getAdresse() : Adresse[] {
        return this.adresse;
    }
    setAdresse(adresse: Adresse[]) : void {
        this.adresse = adresse;
    }
}