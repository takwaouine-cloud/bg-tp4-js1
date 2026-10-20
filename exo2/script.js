// Fonction F1  : Affichage d'une liste d'éléments simples 
function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    console.log(etudiants[0]);
    console.log(etudiants[1]);
    console.log(etudiants[2]);
}

// Fonction F2 : Affichage d'un objet Etudiant
function f2() {
    let objetEtudiant = { nom: 'John', prenom: 'DOE', age: 30 };
    console.log(objetEtudiant);
}

// Fonction F3  : Manipulation d'un tableau d'objets 
function f3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ]; // Tableau contenant plusieurs objets
    
    // Boucle pour parcourir le tableau d'objets (vu dans le slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}

