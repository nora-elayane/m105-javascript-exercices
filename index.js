
// let a  =(prompt("donner moi un nombre")); 

// if ( isNaN(+a) || (a.trim() == "") || (a == null) ) {
//  alert("veuillez entrer un nombre! ")
// }
// else {
//     document.write( `le carée de ${a} est : ` +  ( Number(a) ** 2))
   
// }

// x = Number(prompt("donner le nombre du jour: "))
// switch (x){
//     case  1 :
//         y = "lundi"
//         break;
//     case 2 : 
//        y = "mardi"
//        break;
//     case  3 : 
//       y = "mercredi"
//       break;
//     case 4 : 
//       y = "jeudi"
//       break;
//     case  5 : 
//     y = "vendredi"
//     break;
//     case  6 : 
//      y = "samedi"
//      break;
//      case  7 :
//         y = "dimanche"
//         break ;
//         default : 
//         y = undefined

// }
// if ( y === undefined){
//  alert("invalid value")
// }
// else{document.write("le nom du jour est : " +  y) };




// EXERCICE ECOLE
// let a  =(prompt("donner moi un nombre"));
// while (a === null  || a.trim() === "" || isNaN(a))
//    {
//  alert("veuillez entrer un nombre! ") ;
//   a  = Number(prompt("donner moi un nombre"));
// } ;
// document.write( `le carée de ${a} est : ` +  ( Number(a) ** 2)) ;


// Exercice 2 : 
// let tableau = [] ;
// let somme = 0 ;

// function demandeNombre(message){
// let valeur = prompt(message) ; 
// while (  valeur === null || valeur.trim( ) === "" || isNaN(valeur))
// {
//   alert("veuillez entrer un nombre ! ")
//   valeur = prompt("message") ; 
// }
// return Number(valeur) ; 

// }
// let nb = demandeNombre("donner le nombre des notes: ") ; 
// for (let i = 1 ; i <= Number(nb) ; i++) {
//  let  note = demandeNombre(`donner la  note numero ${i} : `) ;
//  while (note < 0 || note > 20 ){
//   alert("la note doit etre entre 0 rt 20 ! ");
//   note = demandeNombre(`Donner la note numero ${i} : `) ; 
//  }
//  tableau.push(note) ; 
// }

// for (let element of tableau) {
//    somme  += element ;
// }


// let m = somme / nb;
// let max = tableau[0] ; 
// let min = tableau[0] ; 
// for (let element of tableau) {
//   if (element > max ) max = element ;
//   if (element < min ) min = element ; 
// }

// let appreciation ;
// if (m >= 16) {
//   appreciation = "Exelent" ; 
// }else if (m >=12){
//   appreciation = "bien" ; 
// }else if (m >= 10){
//   appreciation = "passable" ;
// }else{
//   appreciation = "Echec" ; 
// }

// document.write(`la moyenne est : ${m} <br>
//                Meilleure note : ${max}<br>
//                plus petite note : ${min}<br>
//                appreciation : ${appreciation} `);



// Settimeout() : 
// console.log("Bonjour ! ") ; 
// let name  ;
// function nom(a) {
//     console.log( `je m'appele ${a}`) ; 
// }
// setTimeout(nom , 1000 , "nora") ; 
// console.log("Au revoir")

// function bye(){
// console.log("Au revoir !");
// }
// function saluer(nom, callback) {
//    console.log("Bonjour " + nom);
//    callback();
// }
// saluer("Nora", bye);

// console.log("hello ! ")

// function callB() {
//    console.log("im nora");
// }
// setTimeout(callB , 0);

// console.log("byye ! ")

// console.log("Inscription en cours ...")


// function inscription(callback){
//    console.log("Inscription Confirmé ! ")
//    callback() ;
// }
// function confirmé() {console.log("Bienvenue!")}

// setTimeout(inscription , 3000, confirmé) ; 
//EXERCICE 1
// let prom = new Promise(function(resolve){
//    setTimeout(function(){resolve("Operation terminé");}
      
//    , 2000);});
// prom.then(function(result){
//    console.log(result);
// });

//EXERCICE 2
//  let n = Math.floor(Math.random()* 10)  ; 
// let nb = new Promise(function(resolve , reject){
 
//    if (n > 5) {
//       resolve("Succès");
//    }else{
//       reject("Erreur");
//    }
// })
// nb.then(function(result){
//    console.log(n);
//    console.log(result);
// })
// .catch(function(error){
//    console.log(n);
//    console.log(error);
// });

//EXERCICE 3

// function telechargerFichier(){
//    return new Promise(function(resolve){
//       setTimeout(function(){
//          resolve("telechargement terminé")
//       },3000)
//    }) ;
//                            }
// telechargerFichier()
// .then(function(result){
// console.log(result);});

//EXERCICE 4 : 
// let titles = new Promise(function(resolve , reject){
//    setTimeout(()=>{
//       console.log("Title 1");
//       resolve();
//    },1000)}).then(function(){
//       return new Promise((resolve)=>{
//       setTimeout(()=>{
//          console.log("Title 2");
//          resolve();
//       }, 1000)
//    }).then(function(){
//       return new Promise((resolve)=>{
//          setTimeout(()=>{
//             console.log("title 3");
//             resolve();
//          },1000)
//       })
//    }).then(function(){
//       return new Promise((resolve)=>{
//          setTimeout(()=>{
//            console.log("title 4") ; 
//            resolve() ; 
//          },1000)
         
//       })
//    })
//    })
//Exercice 1 — setTimeout (débutant):

// console.log("Début du programme");
// function fin(){
//     console.log("fin du program");
// }
// setTimeout(()=>{
//     console.log("Message aprés 2 secondes");
//     fin();
// },2000 )

//Exercice 2 — Callback :
// function s( somme , a ,b ){
//     console.log("resultat :");
//     somme(a ,b); 
// }

// function somme(a ,b){   
//     console.log(a + b) ;
// }

// s(somme , 2 , 13 );

//Exercice 3 — Callback + setTimeout :
// function fin(){
//     console.log("affichage du profil")
// }
// function chargerUtilisateur(fun){
//     setTimeout(()=>{
//         console.log("utilisateur chargé");
//         fun();
//     },2000)
// }
// chargerUtilisateur(fin)

//Exercice 4 — Promise simple:
// function verifier(n){
//     let b = new Promise(function(resolve ,reject){
//         if(n % 2 == 0){
//             resolve("pair")
//         }
//         else{
//             reject("impair")
//         }
//     }).then((msg)=>{
//    console.log(msg)
// })
// .catch((error)=>{
//     console.log(error)
// })
// }
// verifier(9)

//Exercice 5 — Promise + setTimeout:
// function simmuler(){
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             console.log("chargement terminé")
//         },3000)
//     }).then((msg)=>{
//         console.log(msg)
//     })
// }
// simmuler()

//Exercice 6 — Chaînage de Promises : 
// function chargerProfil(){
//     console.log("Profile chargé") ;
// }
// function chargerMessages(){
//     console.log("Messages chargés") ;
// }
// function login(){
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             console.log("Connexion réussie")
//             resolve();
//         }, 1000);
//     }).then(function(){
//         return new Promise((resolve)=>{
//         setTimeout(() => {
//             chargerProfil();
//             resolve();
//         }, 1000);
//         })
// }).then(function(){
//         return new Promise((resolve)=>{
//         setTimeout(() => {
//             chargerMessages();
//             resolve();
//         }, 1000);
//         })
// })

// }
// login()
//Exercice 7 — async / await : 


//Exercice fetch : 

// async function donné() {
//     let don = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await don.json();
//     console.log(data) ;
// }
// donné()

//PARTIE 1 — Bases JS
//Exercice 1
// let nom = "NOM" ; 
// let age = "AGE" ;
// let ville = "VILLE" ;
// console.log("je m'appele " + nom + " j'ai " + age + " ans et j'habite à " + ville)

//Exercice 2 :
// let a = 8 ; 
// let b = 3 ; 
// console.log(a + b) ; 
// console.log(a * b) ; 
// console.log(Math.floor(a / b)) ; 

//Exercice 3 : 
// let n = parseInt("15") ; 
// let m = Number("15") ; 
// console.log(n + m) ; 
// console.log(n + 5)

// PARTIE 2 — Conditions
// Exercice 4 :
// let i = prompt("donner un nombre: ")
// i = parseInt(i) ;
// if(isNaN(i)){
//     console.log("not a number ")
// }
// else if(i > 0 ){
//     console.log("Positif");
// }else if(i == 0 ){
//     console.log("Zero");
// }else {
//     console.log("Negative")
// }

// Exercice 5 :
// let age = prompt("donner votre age : ")
// if(isNaN(+age) &&  age != ""){
//     console.log("this is not a number !")
// }else if(+age >=18){
//         console.log("Majeur")
//     }else if(+age > 0 ){
//         console.log("Mineur")
//     }else{
//         console.log("age non valide ")
//     }

// Exercice 6 :
// let number = prompt("donner un nombre : ")
// if(isNaN(+number) || typeof(+number) == null || +number == "" ){
//     console.log("not a number")
// }else if(+number % 2 === 0){
//     console.log("pair")
// }else{
//     console.log("impair")
// }

// CORRIGé
// let number = prompt("donner un nombre : ");

// if (number === null) {
//     // Cas 1 : L'utilisateur a cliqué sur "Annuler"
//     console.log("Action annulée par l'utilisateur.");
// } else if (number.trim() === "") {
//     // Cas 2 : L'utilisateur a cliqué sur "OK" sans rien écrire (ou juste des espaces)
//     console.log("Erreur : Le champ est vide.");
// } else if (isNaN(number) || isNaN(parseFloat(number))) {
//     // Cas 3 : L'utilisateur a saisi du texte qui n'est pas un nombre
//     console.log("Erreur : '" + number + "' n'est pas un nombre.");
// } else {
//     // Cas 4 : C'est un nombre valide, on peut tester la parité
//     let n = Number(number);
//     if (n % 2 === 0) {
//         console.log("Le nombre " + n + " est pair.");
//     } else {
//         console.log("Le nombre " + n + " est impair.");
//     }
// }

// PARTIE 3 — Boucles
// Exercice 7 :
// for(let i = 1 ; i <=10 ; i++){
//     console.log(i)
// }
// Exercice 8 : 
// let i = 10 ; 
// while(i >=1){
//     console.log(i)
//     i--
// }

// Exercice 9 :
// let x = 5 ; 
// for(let i = 1 ; i <= 10 ; i++){
//    console.log( x +  " * " +i+ " = "+  (x * i));
//     console.log( `${x}    *  ${i}  =   ${x * i}`);
// }
// PARTIE 4 — Fonctions
// Exercice 10  :
// function addition(a, b){
//     return a + b 
// }
// console.log(addition(2 , 4))

// Exercice 11 : 
// function carre(n){
//     return n**2
// }
// console.log(carre(2))

// Exercice 12 :
// function saluer(nom){
//     console.log("Bonjour " + nom);
// }
// saluer("Nora")

// PARTIE 5 — setTimeout / Callback
// Exercice 13 : 

// console.log("Bonjour") ; 
// setTimeout(()=>{
//     console.log("bienvenu")
// },2000)

// Exercice 14 :
// function operation(a , b  , callb ){
//     callb(a,b);
// }
// function exp(x , y){
//     console.log(x + y) ;
// }
// operation(3 , 4 , exp)

// PARTIE 6 — Promise
// Exercice 15 : 
// let n = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Telechargement términé")},3000)
// })
// n.then(function(msg){
//     console.log(msg) ;
// })
// console.log(n)

// Exercice 16 : 
// let n = 1
// let p = new Promise(function(resolve , reject){
//     if(n > 10){
//         resolve("Succes")
//     }else{
//         reject(("erreur"))
//     }
// }).then(function(msg){
//     console.log(msg)
// }).catch(function(err){
//     console.log(err)
// });

//PARTIE 7 — Tableaux
// Exercice 17 : 
// let notes = [10, 15 , 12, 18] ;
// for(note of notes){
//     console.log(note)
// }
// // Exercice 18 :
// let somme = 0
// for(note of notes){
//   somme += note
// }
// console.log("la Moyenne est :" + (somme/notes.length))

// PARTIE 8 — Objets
// Exercice 19  :
// let etudiant = {
//     nom : "Nora" ,
//     age : 21 , 
//     note : 20
// }
// console.log(etudiant.nom) ;
// console.log(etudiant.age) ; 
// console.log(etudiant.note);

// Exercice 20 : 
// class Rectangle{
//     constructor(largeur , hauter){
//         this.largeur = largeur
//         this.hauter = hauter
//     }
//         surface(){
//            console.log(this.hauter * this.largeur) ; 
//         }
//     }
// let i = new Rectangle(2 , 2)
// i.surface()
// console.log(i.hauter)

// PARTIE 9 — Regex
// Exercice 21 :
// let text = "ldjdhDJG" ;
// let rej = /\d+/g ;
// console.log(rej.test(text))

// Exercice 22 :
// let text = "nfgkvf9k" ; 
// let rej = /^[a-z]+$/i ;
// console.log(rej.test(text))


// PARTIE 10 — JSON
// Exercice 23 : 
// let user =  {
//     nom : "nora",
//     age : 21
// }
// let json = JSON.stringify(user) ;
// console.log(json)

// Exercice 24 :
// let json ='{"nom":"nora","age":21}' ;
// let personne = JSON.parse(json);
// console.log(personne);
// console.log(json);

// EXERCICES STYLE CONTROLE OFPPT
// Exercice 1 :
// let t = [12,15,18,10] ; 
// let somme = 0 ;
// let max = t[0] ;
// for(let i = 0 ; i < t.length ;i++){
//     console.log(t[i]);
//     somme += t[i]
//     if(t[i]>max){
//         max = t[i]
//     }
// }
// console.log(`la moyenne est ${somme /t.length}`)
// console.log(`la mote max est ${max}`)

// Exercice 2 :
// class Produit{
//     constructor(nom , prix , quantité){
//         this.nom = nom ;
//         this.prix = prix ;
//         this.quantité = quantité ; 
//     }
//     afficher(){
//         console.log(`nom : ${this.nom} , prix : ${this.prix} DH`)
//     }
//     calculerTotal(){
//         return `le total est ${this.prix * this.quantité} DH`
//     }
// }
// let p1 = new Produit("Iphone" , 13000 , 3) ;
// p1.afficher()
// console.log(p1.calculerTotal())

// Exercice 3 :

// let tele = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Fichier Téléchargé ! ")
//     },3000)
// }).then(function(msg){
//     console.log(msg)
// })
// tele

// Exercice 4 : 
// let telephone = "212634567890" ;
// let reg = /^2{1}1{1}2{1}[675]{1}[0-9]{8}$/g
// console.log(reg.test(telephone));

// Exercice 5

// let JS ='[{"nom":"Ali"},{"nom":"Sara"},{"nom":"Nora"}]' ; 
// let js = JSON.parse(JS) ;
// // console.log(js)
// for(let j of js){
//     console.log(j.nom) ;
// }


