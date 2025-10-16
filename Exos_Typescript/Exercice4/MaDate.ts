export class MaDate {
    private jour : number;
    private mois : number;
    private annee : number;

    constructor(jour: number, mois: number, annee: number) {
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    getJour() : number {
        return this.jour;
    }
    setJour(jour: number) : void {
        this.jour = jour;
    }
    getMois() : number {
        return this.mois;
    }
    setMois(mois: number) : void {
        this.mois = mois;
    }
    getAnnee() : number {
        return this.annee;
    }
    setAnnee(annee: number) : void {
        this.annee = annee;
    }

    ajouterUnJour() : void {
        this.jour++;
        
        let maxJour = 31;

        if ([4, 6, 9, 11].indexOf(this.mois)) {
            maxJour = 30;
        } else if (this.mois === 2) {
            if ((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0)) { // vérifier si une année est bissextile ou non.
                maxJour = 29; 
            } else {
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
    }

    ajouterPlusieursJours(n: number) : void {
        for (let i = 0; i < n; i++) {
            this.ajouterUnJour();
        }
    }

    ajouterUnMois() : void {
        this.mois++;
        if (this.mois > 12) {
            this.mois = 1;
            this.annee++;
        }

        let maxJour = 31;
        if ([4, 6, 9, 11].indexOf(this.mois)) {
            maxJour = 30;
        } else if (this.mois === 2) {
            if ((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0)) { // vérifier si une année est bissextile ou non.
                maxJour = 29; 
            } else {
                maxJour = 28; 
            }
        }

        if (this.jour > maxJour) {
            this.jour = maxJour;
        }
    }

    ajouterUneAnnee() : void {
        this.annee++;
        if (this.mois === 2 && this.jour === 29 && !((this.annee % 4 === 0 && this.annee % 100 !== 0) || (this.annee % 400 === 0))) {
            this.jour = 28;
        }
    }

    afficher() : void {
        console.log(this.jour + "/" + this.mois + "/" + this.annee);
    }
}