// __________Déclaration des variables________________________________________________________

// let choixAccueilJ = prompt("Bonjour, Bienvenue sur le jeu du pendu !\n\nVous pouvez taper :\n   \"j\" : pour jouer\n   \"r\" : pour afficher les règles \n   \"q\" : pour quitter le jeu \n");

let motChoisi = listeMotsRandom(); // renvoi le mot choisi par la fonction
motChoisi = motChoisi.split(""); // split le mot et le renvoi sous forme de tableau, ok fonctionne
let motBrouille = motCache(motChoisi);// récupère le mot brouille par des tirets renvoyé par la fonction motCache()
let lettreJoueur = "";
let scoreJoueur = "";

// __________Déclaration des fonctions________________________________________________________

// function  choixAccueil(reponseJoueur) {
//     if (reponseJoueur === "j") {
//     }
//     else if (reponseJoueur === "r") {
//         alert("Voici les règles du pendu :\nLe but du jeu est simple : vous devez deviner le mot qui se cache sous les tirets... \n Donnez une lettre et si la lettre est dans le mot, elle s'affichera.\n Sinon vous perdez un point.\n Vous avez sept points, devinez le mot avant la fin des 7 points et vous avez gagner !\n");
//     }
//     else {
//         alert("Oooh, vous pouvez donc fermer cette page... \n A bientôt !!!");
//     }
// }

function listeMotsRandom() {// choisi un mot au hasard dans la liste
    let mots = ["aquarium", "velociraptor", "cartable", "ventricule", "saturne"];
    let randomMot = mots[Math.floor(Math.random()*mots.length)];
    return randomMot;
}

function motCache (mot) {
    console.log(mot);
    let brouille = [];
    mot.forEach(lettre => brouille.push("_"));
    return brouille;// renvoie un tableau contenant des tirets au lieu des lettres du mot choisi
}

function lettreJoueurConform(lettreJoueur) {// vérifie la longueur de lettre donnée par le joueur
    if(lettreJoueur.length === 1 ) {
        return lettreJoueur.toLowerCase();
    }
   {
        scoreJoueur--;
        alert("Vous avez tapé trop de lettres... Ou pas assez, vous venez de perdre un point ^^\n   Votre score est de : " + scoreJoueur);
    }
}

function verifAffichage(lettre, vraiMot, cache) { 
    for(i = 0; i < vraiMot.length; i++) {
        if (vraiMot[i] === lettre) {
            cache[i] = lettre;
        }
    }
    return cache;
}


// __________Code Courant________________________________________________________

// choixAccueil(choixAccueilJ);// appel fonction avec variable choixAccueilJoueur

    scoreJoueur = 7;
    lettreJoueur = prompt(motBrouille + "\n\n   Votre score est de : " + scoreJoueur + "\nChoisissez votre lettre : ");
    lettreJoueur = lettreJoueurConform(lettreJoueur);
    motBrouille = verifAffichage(lettreJoueur, motChoisi, motBrouille);
    console.log(motBrouille);

