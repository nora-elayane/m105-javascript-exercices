//  Niveau 1 — Bases (1 → 10)
// Exercice 1
// Créer deux variables :
// a = 10
// b = 5
// Afficher :
// Somme
// Produit
// Division
// let a = 10 ;
// let b = 5 ; 
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// Exercice 2
// Créer une variable :
// nom = "Nora"
// Afficher :
// Bonjour Nora
// let nom = "Nora" ; 
// console.log("bonjour "+  nom)
// Exercice 3
// Créer une variable :
// age = 20
// Afficher :
// Vous êtes majeur
// si age >= 18
// let age =2 ; 
// if(age >=18){
//     console.log("Majeur")
// }else{
//     console.log("Mineur")
// }
// Exercice 4
// Demander un nombre avec prompt.
// Afficher :
// positif
// negatif
// ou zero
// let nombre = prompt("Donner un nombre : ")
// let n = +nombre
// if(isNaN(n)){
//     console.log("its not a number")
// }else if(n > 0){
//     console.log("Positif")
// }else if(n < 0){
//     console.log("Negatif")
// }else if(n == 0){
//     console.log('Zero')
// }
// Exercice 5
// Vérifier si un nombre est :
// pair
// ou
// impair
// let n = 12 ; 
// if(n % 2 == 0){
//     console.log("pair");
// } else {console.log("impair");}
// Exercice 6
// Afficher les nombres :
// 1 → 10
// avec for.
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }
// Exercice 7
// Afficher :
// 10 → 1
// avec while.
// let i = 10 ; 
// while( i >= 1){
//     console.log(i);
//     i--
// }
// Exercice 8
// Afficher la table de multiplication de 3.
// 3 x 1 = 3
// 3 x 2 = 6
// for(let i = 1 ;  i <= 10 ; i++){
//     console.log(`3 * ${i} = ${3 * i}`)
// }
// Exercice 9
// Créer une fonction :
// addition(a,b)
// qui retourne la somme.
// function addition(a , b){
//     console.log(a +  b )
// }
// addition(2,5)
// Exercice 10
// Créer une fonction :
// carre(n)
// qui retourne :
// n * n
// function carre(n){
//     console.log(n * n)
// }
// carre(2)
//  Niveau 2 — Tableaux et objets (11 → 20)
// Exercice 11
// Créer un tableau :
// notes = [10,12,15,18]
// Afficher toutes les notes.
// let notes = [10,12,15,18] ; 
// for(let note of notes){
//     console.log(note)
// }
// Exercice 12
// Calculer la moyenne des notes
// let notes = [10,12,15,18] ; 
// let somme = 0
// let cont = 0
// for(let note of notes){
//     somme += note ;
//     cont += 1
// }
// console.log(somme/cont)
// Exercice 13
// Trouver la plus grande note dans le tableau
// notes = [10,12,15,18];
// let max = notes[0];
// for(let note of notes){
//     if(note > max){
//         max = note
//     }
// }
// console.log("la note maximal est: " + max)
// Exercice 14
// Ajouter une note dans le tableau avec :
// push()
// notes = [10,12,15,18];
// notes.push(20)
// console.log(notes)
// Exercice 15
// Supprimer la dernière note avec :
// pop()
// notes = [10,12,15,18];
// notes.pop() ; 
// console.log(notes)
// Exercice 16
// Créer un objet :
// etudiant
// avec :
// nom
// age
// note
// Afficher les informations 
// etudiant={
//     nom:"nora",
//     age:21 , 
//     note:20
// }
// console.log(etudiant)
// Exercice 17
// Créer un objet :
// voiture
// avec :
// marque
// modele
// annee
// Afficher les valeurs.
// let voitures = {

//     marque:"Audi",
//     modele:"Q5",
//     annee:2018
// }
// console.log(voitures)
// Exercice 18
// Créer une classe :
// Rectangle
// avec :
// largeur
// hauteur
// Créer une méthode :
// surface()
// class Rectangle{
//     constructor(largeur , hauter){
//         this.largeur = largeur
//         this.hauter = hauter
//     }
//     surface(){
//         return  this.largeur * this.hauter ;
//     }
// }
// let r = new Rectangle(2 , 3)
// console.log("la surface est: " + r.surface())
// Exercice 19
// Créer deux objets Rectangle et afficher leurs surfaces.
// let r = new Rectangle(2 , 3)
// console.log("la surface est: " + r.surface())
// let b = new Rectangle(12 , 5)
// console.log("la surface est: " + b.surface())
// Exercice 20
// Créer une classe :
// Etudiant
// avec :
// nom
// note1
// note2
// Créer une méthode :
// moyenne()
// class Etudiant{
//     constructor(nom , note1 , note2){
//         this.nom = nom
//         this.note1 = note1
//         this.note2 = note2
//     }
//     moyenne(){
//         let somme = this.note1 + this.note2 ; 
//         return somme/2
//     }
// }
// let et1 = new Etudiant("nora" , 19 , 20)
// console.log(`la moyenne de ${et1.nom} est : ${et1.moyenne()}`)
//  Niveau 3 — Asynchronisme (21 → 25)
// Exercice 21
// Afficher :
// Bonjour
// puis après 2 secondes
// Bienvenue
// avec setTimeout.
// console.log("Bonjour") ; 
// setTimeout(function(){
//     console.log("Bienvenue")
// },2000);
// Exercice 22
// Créer une fonction avec callback :
// operation(a,b,callback)
// Le callback affiche le résultat.
// function operation(ope , a  , b){
//     console.log(`la somme est : `);
//     console.log(ope(a,b))
// }
// function ope(a,b){
//     return +a + +b
// }
// operation(ope ,2 , 5 )
// Exercice 23
// Créer une Promise :
// après 3 secondes
// Operation terminée
// let p = new Promise(function(resolve){
//     (setTimeout(()=>{
//         resolve("Operation terminé")
//     },3000))
// }).then(function(msg){
//    console.log(msg) ;
// })
// Exercice 24
// Créer une Promise :
// si un nombre est > 10
// resolve("succès")
// sinon
// reject("erreur")
// let nb = 30 ;
// let n = new Promise(function(resolve,reject){
//     if (nb > 10){
//         resolve("Succès")
//     }else{
//         reject("erreur")
//     }
// }).then(function(msg){console.log(msg)}).catch(function(msg){console.log(msg)})
// Exercice 25
// Utiliser async / await pour attendre une Promise.
// async function no(){
//     let c1 = await console.log(2000)
//     console.log(c1)
// }
// Niveau 4 — Regex et JSON (26 → 30)
// Exercice 26
// Créer une Regex qui vérifie si une chaîne contient
// seulement des chiffres.
// let rej = /^\d+$/g ;
// let chaine = "234E" ;
// console.log(rej.test(chaine))
// Exercice 27
// Créer une Regex qui vérifie si un texte contient au moins un
// nombre.
// let rej = /\d+/g ;
// chaine = "GK900HLff" ; 
// console.log(rej.test(chaine))
// Exercice 28
// Créer un objet :
// produit = {
// nom: "Laptop",
// prix: 5000
// }
// Transformer en JSON avec :
// JSON.stringify()
// produit = {
// nom: "Laptop",
// prix: 5000
// }
// let p = JSON.stringify(produit)
// console.log(p)
// Exercice 29
// Transformer ce JSON en objet :
// '{"nom":"Nora","age":20}'
// avec :
// JSON.parse()
// let ob = '{"nom":"Nora","age":20}' ; 
// let n = JSON.parse(ob)
// console.log(n)
// Exercice 30 (style examen)
// Créer un programme qui :
// 1⃣crée un tableau :
// [12,15,10,18]
// 2calcule la moyenne
// 3affiche la note maximale
// let t = [12,15,10,18] ; 
// somme = 0 ; 
// max = t[0];
// for(let n of t){
//     somme+= n ; 
//     if(n > max){
//         max = n
//     }
// }
// console.log(`la moyenne est : ${somme/t.length} , et la note maximal est : ${max} `)
let i = true ; 
console.log(typeof(i)) ; 