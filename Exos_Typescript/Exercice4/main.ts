import { MaDate } from "./MaDate";

const date = new MaDate(25, 5, 2006);
date.afficher();
date.ajouterUnJour();
date.afficher();
date.ajouterPlusieursJours(10);
date.afficher();
date.ajouterUnMois();
date.afficher();
date.ajouterUneAnnee();
date.afficher();