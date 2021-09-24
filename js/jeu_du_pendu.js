// // __________Déclaration des variables________________________________________________________

// let choixAccueilJ = prompt("Bonjour, Bienvenue sur le jeu du pendu !\n\nVous pouvez taper :\n   \"j\" : pour jouer\n   \"r\" : pour afficher les règles \n   \"q\" : pour quitter le jeu \n");

let motChoisi = listeMotsRandom(); // renvoi le mot choisi par la fonction


// // __________Déclaration des fonctions________________________________________________________

// function  choixAccueil(reponseJoueur) {
//     if (reponseJoueur === "j") {
//         alert("Voici les règles du pendu :\nLe but du jeu est simple : vous devez deviner le mot qui se cache sous les tirets... \n Donnez une lettre et si la lettre est dans le mot, elle s'affichera.\n Sinon vous perdez un point.\n Vous avez sept points, devinez le mot avant la fin des 7 points et vous avez gagner !\n");
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

// function motCache (motChoisi) {
    let splitMot = motChoisi.split('');// split le mot et le renvoi sous forme de tableau, ok fonctionne
    let brouille = [];
    splitMot.forEach(lettre => brouille.push("_"));
    alert(brouille);
        
// }
// __________Code Courant________________________________________________________

// choixAccueil(choixAccueilJ);// appel fonction avec variable choixAccueilJoueur