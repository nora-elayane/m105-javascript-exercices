//  Exercice 1 — Supprimer les doublons d’un tableau
// Tableau :
// [3,5,3,8,5,10,8]
// Créer une fonction :
// supprimerDoublons(tableau)
// Résultat attendu :
// [3,5,8,10]
//method 1
// let t = [3,5,3,8,5,10,8] ;
// let unique =  [...new Set(t)]
// console.log(unique)
//method 2
// let t = [3,5,3,8,5,10,8] 
// let unique = []
// for(let i of t){
//     if (!unique.includes(i)){
//         unique.push(i)
//     }
// }
// console.log(unique)
// method 3

// console.log('%cElzero %cWeb %cSchool','color:red;font-size:40px','color:green;font-size:40px' , 'background-color:blue;font-size:40px')
// console.group("group 1")
// console.log("MESS one");
// console.log("MESS two")

// console.group("child group")
// console.log("MESS one")
// console.log("MESS two")

// console.group("Grand child group")
// console.log("MESS one")
// console.log("MESS two")
// console.groupEnd()

// console.group("Hello my name is nora")
// console.log("Hello my name is nora")
// console.log("Hello my name is nora")
// let a = 20 ; 
// let b = 30 ;
// console.log("hello how are you doing guys")
// console.table(["elzhiro" , "hi" , "Sahieh" , "Gahial" , "Aya"])

/* console.log("Iam In Console");
 document.write("Iam In Page");*/

//  let theTitle = "Elzero";
//  let DescriptionCon = "Elzero web school" ; 
//  let DateTOday = "25/10" ;

//  let div = `<div>
//  <h3>Hello ${theTitle}</h3>
//  <p>${DescriptionCon}</p>
//  <span>${DateTOday}</span>
//  </div>`

// document.write(div);
// document.write(div);
// document.write(div);

// Exercice 1 — Supprimer les doublons d’un tableau
// Tableau :
// [3,5,3,8,5,10,8]
// Créer une fonction :
// supprimerDoublons(tableau)
// Résultat attendu :
// [3,5,8,10]
// let t = [3,5,3,8,5,10,8] ;
// let unique = []; 
// for (let i of t){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }
// console.log(unique) ;

//  Exercice 2 — Compter les occurrences
// Tableau :
// ["js","html","js","css","html","js"]
// Créer une fonction qui retourne :
// {
// js:3,
// html:2,
// css:1
// }
// let t = ["js","html","js","css","html","js"] ;
// let ob = {};
// for(let i of t){
//     let com = 0 ;
//    for(let j of t){
     
//     if(j == i){
//         com += 1
//     }
//    }
//    ob[i] = com ;
// }
// console.log(ob) ;
//  Exercice 3 — Trier un tableau d’objets
// Tableau :
// [
// {nom:"Ali", age:25},
// {nom:"Sara", age:19},
// {nom:"Nora", age:22}
// ]
// Trier par âge croissant.
// Résultat :
// Sara
// Nora
// Ali
// let etu = [
// {nom:"Ali", age:25},
// {nom:"Sara", age:19},
// {nom:"Nora", age:22}
// ] ;




