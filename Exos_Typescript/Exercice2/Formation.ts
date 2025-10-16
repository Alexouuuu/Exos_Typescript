import { Stagiaire } from "./Stagiaire";

export class Formation {
    private intitulé: string;
    private nbrJours: number;
    private stagiaires: Stagiaire[];

    constructor(intitulé : string, nbrJours: number, stagiaires: Stagiaire[]) {
        this.intitulé = intitulé;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }

    getIntitulé() : string {
        return this.intitulé;
    }
    getNbrJours() : number {
        return this.nbrJours;
    }
    getStagiaires() : Stagiaire[] {
        return this.stagiaires;
    }
    calculerMoyenneFormation(notesParStagiaire: number[][]) : number {
        let sommeMoyennes = 0;
        
        for (let i=0 ; i< this.stagiaires.length; i++) {
            const moyenneStagiaire = this.stagiaires[i].calculerMoyenne(notesParStagiaire[i]);
            sommeMoyennes += moyenneStagiaire;
        }
        return sommeMoyennes / this.stagiaires.length;
    }

    getIndexMax() : number {
        let indiceMax = 0;
        let maxMoyenne = this.stagiaires[0].getMoyenne();

        for (let i=1; i < this.stagiaires.length ; i++) {
            if (this.stagiaires[i].getMoyenne() > maxMoyenne) {
                maxMoyenne = this.stagiaires[i].getMoyenne();
                indiceMax = i;
            }
        }
        return indiceMax;
    }

    afficherNomMax(): void {
        const indexMax = this.getIndexMax();
        const stagiaireMax = this.stagiaires[indexMax];
        console.log("Le stagiaire avec la meilleure moyenne est : " + stagiaireMax.getMoyenne() + " " + stagiaireMax.getNom() + " " + stagiaireMax.getPrenom());
    }

    afficherMinMax(notesParStagiaire: number[][]) : void {
        const indexMax = this.getIndexMax();
        const stagiaireMax = this.stagiaires[indexMax];
        const notesDuStagiaireMax = notesParStagiaire[indexMax];

        const minNote = stagiaireMax.trouverMin(notesDuStagiaireMax);
        console.log("La note minimale du stagiaire avec la meilleure moyenne est : " + minNote);
    }

    trouverMoyenneParNom(nom: string) : void {
        for (const stagiaire of this.stagiaires) {
            if (stagiaire.getNom() === nom) {
                console.log("La moyenne de " + nom + " est : " + stagiaire.getMoyenne());
                return;
            }
        }
        console.log("Pas de stagiaire avec ce nom." );
    }
}