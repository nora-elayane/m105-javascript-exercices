//1-Calculer la moyenne d’un tableau
// Créer un tableau :
// [12,15,10,18]
// 1. afficher toutes les notes
// 2. calculer la moyenne
// 3. afficher :
// Moyenne = X

// let t = [12,  15 , 10 , 18] ;
// let somme = 0
// for(let i of t){
//     console.log(i);
//     somme += i
// }
// console.log(`Moyenne = ${somme/t.length}`)


//2-Trouver le maximum dans un tableau
// Tableau :
// [3,8,12,5,20,7]
// Afficher :
// Le maximum = 20

// let t = [3,8,12,5,20,7] ;
// let max = t[0]
// for(let i of t){
// if(i > max){
//     max = i
// }
// }
// let max = Math.max(...t); IMPORTANT
// console.log(`Le maximum = ${max}`)

//3- Vérifier si un nombre est pair ou impair
// Demander un nombre avec :
// prompt
// Afficher :
// pair
// ou
// impair

// let n = prompt("Donner un nombre") ; 
// let nb = +n
// if(isNaN(nb) || nb === null || nb == ""){
//     console.log("its not a number")
// }else if(nb % 2 == 0){
//     console.log("pair")
// }else{
//     console.log("impair")
// }


// 4- Table de multiplication
// Afficher la table de multiplication de 5.
// Exemple :
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`5 * ${i} = ${5 * i}`)
// }

//5- Fonction qui retourne le carré
// Créer une fonction :
// carre(n)
// qui retourne :
// n²
// Exemple :
// carre(4)
// → 16

// function carre(n){
//     return n * n ;
// }
// console.log(carre(4)) ;

//6- Objet étudiant
// Créer un objet :
// etudiant
// avec :
// nom
// age
// note
// Afficher :
// Nom : ...
// Age : ...
// Note : ...

// let etudiant = {
//     nom : "Nora" ,
//     age : 21 , 
//     Note : 20 
// }
// console.log(`Nom : ${etudiant.nom}`)
// console.log(`Age : ${etudiant.age}`)
// console.log(`Note : ${etudiant.Note}`)


//7- Classe Rectangle
// Créer une classe :
// Rectangle
// avec :
// largeur
// hauteur
// Créer une méthode :
// surface()
// qui retourne :
// largeur × hauteur

// class Rectangle{
//     constructor(largeur , hauter){
//         this.largeur = largeur
//         this.hauter = hauter
//     }
//     surface(){
//         return  this.largeur * this.hauter
//     }
// }

// let r1 = new Rectangle(3 , 5);
// console.log(r1.surface())

//8- Promise simple
// Créer une Promise qui :
// après 3 secondes
// affiche :
// Téléchargement terminé

// let p = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Téléchargement terminé")
//     },3000)
// }).then(function(msg){
//     console.log(msg)
// })
// p

//9- Regex simple
// Vérifier si une chaîne contient seulement des chiffres.
// Exemple :
// "12345"
// → true
// "123a"
// → false

// let rej = /^\d+$/
// let chaine = "2Z3"
// console.log(rej.test(chaine)) ;

//10- JSON
// Transformer cet objet en JSON :
// {
// nom: "Nora",
// age: 20
// }
// puis reconvertir en objet avec :
// JSON.parse()

// let ob = {
// nom: "Nora",
// age: 20
// }
// let js = JSON.stringify(ob)
// console.log(js)

// let o = JSON.parse(js)
// console.log(o)

// Exercice 1 — Statistiques d’un tableau
// Créer un programme qui
// 1. crée un tableau
// [12,15,9,18,7,14]
// 2. calcule :
// • la moyenne
// • la note maximale
// • la note minimale
// 3. affiche :
// Moyenne : X
// Max : X
// Min : X

// let t = [12,15,9,18,7,14] ;
// let max = t[0] ; 
// let min = t[0] ; 
// let somme = 0 ;
// for(let i of t){
//     somme += i ; 
//     if(i > max){
//         max =i;
//     }
//     if(i < min){
//         min = i ;
//     }
// }
// console.log(`La moyenne: ${somme/t.length}`)
// console.log(`La note maximal : ${max}`)
// console.log(`La note minimal : ${min}`)

// Exercice 2 — Compter les nombres pairs
// Tableau :
// [3,8,5,12,7,20,9]
// Afficher :
// Nombres pairs : X
// let t = [3,8,5,12,7,20,9] ; 
// console.log("Nombres pairs : ")
// for(let i of t){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// Exercice 3 — Filtrer un tableau
// Créer un tableau :
// [5,12,18,3,9,25]
// Créer un nouveau tableau contenant seulement les
// nombres > 10.
// Résultat :
// [12,18,25]

// let t = [5,12,18,3,9,25] ;
// let nb = [] ; 
// for(let i of t){
//     if(i > 10){
//         nb.push(i)
//     }
// }
// console.log(nb)


//  Exercice 4 — Gestion d'étudiants (objet)
// Créer un tableau d’objets :
// [
// {nom:"Ali", note:12},
// {nom:"Sara", note:17},
// {nom:"Nora", note:15}
// ]
// Afficher :
// Ali : 12
// Sara : 17
// Nora : 15
// Puis afficher l’étudiant avec la meilleure note.

// let t = [
// {nom:"Ali", note:12},
// {nom:"Sara", note:17},
// {nom:"Nora", note:15}
// ]
// let max = t[0] ;
// let maxi ; 
// for(let i of t){
//     console.log(i.nom + " : " + i.note)
//     if(i.note >  max.note){
//       max = i
//     }
// }
// console.log(`Meilleure note est : ${max.note}`)

// Exercice 5 — Classe Banque
// Créer une classe :
// CompteBancaire
// avec :
// titulaire
// solde
// Méthodes :
// deposer(montant)
// retirer(montant)
// afficherSolde()
// Exemple :
// Solde : 500
// class CompteBancaire{
//     #solde ;
//     constructor(titulaire,solde){
//         this.titulaire = titulaire ;
//         this.#solde = solde 
//     }
//     deposer(montant){
//         if(+montant > 0){
//             this.#solde += +montant
//         }else{
//             console.log("nombre negatif")
//         }
//         }
//     retirer(montant){
//         if(this.#solde >= montant){
//             this.#solde -=  montant
//         }else{
//             console.log("Solde insufi")
//         }
//     }
//     afficherSolde(){
//        console.log(this.#solde)
//     }
    
// }

// let c1 = new CompteBancaire("Nora" , 500) ;
// c1.afficherSolde()
// c1.deposer(200)
// c1.afficherSolde()
// c1.retirer(600)
// c1.afficherSolde()


//  Exercice 6 — Simulation de téléchargement (Promise)
// Créer une fonction :
// telechargerFichier()
// Elle doit :
// 1 attendre 2 secondes
// 2 afficher :
// Téléchargement en cours...
// puis
// Téléchargement terminé
// Utiliser :
// Promise

// function t(){
//     console.log("Telechargement terminé")
// }
// function telechargerFichier(call){
//     setTimeout(function(){
//         console.log("Telechargement encours")
//         call();

//     },2000)
// }
// telechargerFichier(t)
// console.log("telechargement encours")
// let n = new Promise(function(resolve){
//     setTimeout(() => {
//         resolve("Telechargement terminé")
//     }, 2000);
// }).then(function(msg){
//     console.log(msg)
// })
// n

//  Exercice 7 — async / await
// Créer une fonction :
// chargerDonnees()
// qui attend une Promise puis affiche :
// Données chargées
// Utiliser :
// async / await

// async function chargerDonnees(){
//     let donnees = await fetch("url")
//     console.log("Donnees chargé")
//     console.log(donnees)
// }

//  Exercice 8 — Analyse de texte (String)
// Créer une fonction qui :
// 1 reçoit une phrase
// "javascript est très puissant"
// 2 affiche :
// nombre de caractères
// nombre de mots
// texte en majuscule

// function Analyse(chaine){
//     let nc = chaine.length
//     let nm = chaine.split(" ")
//     let maj = chaine.toUpperCase()
//     console.log(`nombre de caractères est : ${nc} , nombre de mots est : ${nm.length}, la phrase en uppercase : ${maj}`)

// }
// Analyse("javascript est très puissant")


//  Exercice 9 — Validation avec Regex
// Vérifier si une chaîne est un email valide.
// Exemple :
// test@gmail.com
// → valide
// testgmail.com
// → invalide
// let rej = /^\w+[.]gmail.com$/ ;
// let email = "test.gmail.com" ;
// console.log(rej.test(email))


//  Exercice 10 — Manipulation JSON
// JSON :
// [
// {nom:"Ali", age:22},
// {nom:"Sara", age:19},
// {nom:"Nora", age:20}
// ]
// Programme :
// 1 transformer JSON en objet JS
// 2 afficher tous les noms
// 3 afficher les personnes age > 20

// let js = '[{"nom":"Ali", "age":22},{"nom":"Sara", "age":19},{"nom":"Nora", "age":20}]'
// let ob = JSON.parse(js);
// for(let o of ob){
//     console.log(o.nom)  
// }
// console.log("Les perssones plus de 20 sont : ")
// for(let o of ob){
//     if(o.age > 20){
//         console.log(o.nom)
//     } 
// }


//  Exercice 11 — Générateur de nombres aléatoires
// Créer un programme qui :
// 1 génère 10 nombres aléatoires
// 1 → 100
// 2 les stocke dans un tableau
// 3 affiche :
// tableau
// maximum
// minimum

// let t = [] ; 
// for(let i = 1 ; i <= 10 ; i++){
//     let n = (Math.floor(Math.random() * 100))
//     t.push(n)
// }
// console.log(Math.max(...t))
// console.log(Math.min(...t))
// console.log(t)

//  Exercice 12 — Mini système de produits
// Créer une classe :
// Produit
// avec :
// nom
// prix
// Créer un tableau de produits.
// Programme :
// 1 afficher tous les produits
// 2 calculer le prix total

// class Produit{
//     constructor(nom , prix){
//         this.nom = nom
//         this.prix = prix
//     }
// }

// let p1 = new Produit("pomme" , 20) ;
// let p2 = new Produit("banane" , 10) ;
// let p3 = new Produit("Orange" , 3) ;
// let pr = [p1 , p2 , p3] ; 
// let somme = 0
// for(let i of pr){
//     console.log(i)
//     somme += i.prix
// }
// console.log(`prix total : ${somme}`)


//  Exercice 13 — Simulation API (fetch)
// Utiliser :
// fetch
// pour récupérer :
// https://jsonplaceholder.typicode.com/users
// Afficher :
// nom
// email

// async function  data(){
//     let donnees = await fetch("https://jsonplaceholder.typicode.com/users")
//     let ut = await donnees.json();
//     console.log(ut)
// }
// data()


//  Exercice 14 — Compter les occurrences
// Phrase :
// "javascript javascript html css javascript"
// Afficher :
// javascript : 3


// let rej = /javascript/g ;
// let chaine = "javascript javascript html css javascript"
// let t = chaine.split(rej);
// console.log((t.length) - 1)
// let occurrences = chaine.match(rej)
// console.log(occurrences.length)



