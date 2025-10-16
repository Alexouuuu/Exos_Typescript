export class Adresse {
    private rue : string;
    private ville : string;
    private codePostal : string;

    constructor(rue: string, ville: string, codePostal: string) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }

    getRue() : string {
        return this.rue;
    }
    setRue(rue: string) : void {
        this.rue = rue;
    }
    getVille() : string {
        return this.ville;
    }
    setVille(ville: string) : void {
        this.ville = ville;
    }
    getCodePostal() : string {
        return this.codePostal;
    }
    setCodePostal(codePostal: string) : void {
        this.codePostal = codePostal;
    }
}