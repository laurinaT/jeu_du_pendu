// // __________Déclaration des variables________________________________________________________

// let choixAccueilJ = prompt("Bonjour, Bienvenue sur le jeu du pendu !\n\nVous pouvez taper :\n   \"j\" : pour jouer\n   \"r\" : pour afficher les règles \n   \"q\" : pour quitter le jeu \n");



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

function listeMotsRandom() {
    let mots = ["aquarium", "velociraptor", "cartable", "ventricule", "saturne"];
    let randomMot = mots[Math.floor(Math.random()*mots.length)];
    return randomMot;
}
let motChoisi = listeMotsRandom();
console.log(motChoisi);

// __________Code Courant________________________________________________________

// choixAccueil(choixAccueilJ);// appel fonction avec variable choixAccueilJoueur