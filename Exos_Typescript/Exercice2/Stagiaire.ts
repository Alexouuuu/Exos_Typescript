export class Stagiaire {
    private nom: string;
    private prenom: string;
    private Stagiaire_moy: number;

    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }

    getNom(): string {
        return this.nom;
    }

    getPrenom(): string {
        return this.prenom;
    } 
    getMoyenne(): number {
        return this.Stagiaire_moy;
    }

    calculerMoyenne(notes: number[]) : number {
        let somme = 0;
        for (let i=0; i<notes.length; i++) {
            somme += notes[i];
        }
        this.Stagiaire_moy = somme / notes.length;
        return this.Stagiaire_moy;
    }

    trouverMax(notes: number[]) : number {
        let max = notes[0];
        for (let i = 1; i < notes.length ; i++) {
            if (notes[i] > max) {
                max = notes[i];
            }
        }
        return max;
    }

    trouverMin(notes: number[]) : number {
        let min = notes[0];
        for (let i = 1; i < notes.length ; i++) {
            if (notes[i] < min) {
                min = notes[i];
            }
        }
        return min;
    }
}

/* Exercice 2 : Classe Stagiaire

export class Stagiaire {
    private nom: string;
    private notes: number[];

    constructor(nom: string, notes: number[]) {
        this.nom = nom;
        this.notes = notes;
    }
    
    getNom(): string {
        return this.nom;
    }
    getNotes(): number[] {
        return this.notes;
    }
    
    calculerMoyenne(): number {
        if (this.notes.length === 0) {
        const somme = this.notes.reduce((acc, note) => acc + note, 0 )};
        return somme / this.notes.length;
        }
        return 0;
    }

    public trouverMax(): number {
        if (this.notes.length === 0) return 0;
        return Math.max(...this.notes);
    }

    public trouverMin(): number {
        if (this.notes.length === 0) return 0;
        return Math.min(...this.notes);
    }
    
}