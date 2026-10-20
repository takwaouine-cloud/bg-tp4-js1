// Déclaration de la structure de données "Students" sous forme de tableau d'objets 
let Students = [
    { id: 1000, prenom: "JOHN", nom: "DOE", moyenne: 14, rang: 5 },
    { id: 2000, prenom: "BOB", nom: "CARLTON", moyenne: 7, rang: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH", moyenne: 13, rang: 3 }
];

// Fonction B : Prend un seul paramètre de type float et retourne un booléen 
function B(moyenne) {
    let estAdmis = false; // Initialisation d'une variable booléenne 
    
    if (moyenne >= 10) {
        estAdmis = true;
    }
    
    return estAdmis; 
}

// Fonction A : Appelle la fonction B et affiche les résultats un par un 
function A() {
    // Boucle pour parcourir la liste des étudiants (vu dans le slide 45)
    for (let i = 0; i < Students.length; i++) {
        let currentStudent = Students[i];
        
        // Appel de la fonction B en passant la moyenne
        let resultatAdmis = B(parseFloat(currentStudent.moyenne));
        
        // Condition pour l'affichage selon le statut 
        if (resultatAdmis === true) {
            console.log(currentStudent.id + ": ADMIS");
        } else {
            console.log(currentStudent.id + ": AJOURNÉ");
        }
    }
}

